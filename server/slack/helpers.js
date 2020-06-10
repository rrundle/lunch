const { tiny } = require('tiny-shortener')
const MongoClient = require('mongodb').MongoClient

const { mongoUrl } = require('./config')

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

// recursive function to find new spots to fill the array
const getRandomSpot = (arr, filteredArray) => {
  let extraRandomSpot = arr[getRandomInt(0, arr.length)]
  const isDuplicate = filteredArray.find(
    (obj) => (obj || {}).name === extraRandomSpot.name,
  )
  if (isDuplicate) {
    return getRandomSpot(arr, filteredArray)
  } else {
    return extraRandomSpot
  }
}

const getSpecificLunchSpots = ({ appId, text: type }) => {
  return new Promise(async (resolve) => {
    const collection = await mongoClient(appId)
    const data = await collection.find().toArray()
    console.log('data: ', data)
    // filter out the identifier entry
    const onlySpots = data.filter((entry) => entry.alias)
    // if less than 3 we dont have enough to make a poll, return an empty array
    if (onlySpots.length < 3) return resolve([])

    let filteredList
    if (!type) {
      filteredList = [
        onlySpots[getRandomInt(0, onlySpots.length)],
        onlySpots[getRandomInt(0, onlySpots.length)],
        onlySpots[getRandomInt(0, onlySpots.length)],
      ]
    } else {
      const list = onlySpots.filter((lunchSpot) =>
        lunchSpot.categories.some(
          (category) =>
            category.alias.toLowerCase().includes(type.toLowerCase()) ||
            category.title.toLowerCase().includes(type.toLowerCase()),
        ),
      )
      // shuffle the array
      const shuffledList = shuffle(list)
      // make sure the list is no longer than 3 spots
      filteredList = shuffledList.slice(0, 3)
    }
    // Have the filteredList now remove duplicates
    const newFilteredList = Array.from(
      new Set(filteredList.map((a) => a.name)),
    ).map((name) => filteredList.find((a) => a.name === name))
    // if the array is shorter than 3 add more to it
    while (newFilteredList.length < 3) {
      const getNewSpot = getRandomSpot(onlySpots, newFilteredList)
      newFilteredList.push(getNewSpot)
    }
    resolve(newFilteredList)
  })
}

const options = ({ data = {}, uri = '' }) => {
  const { bearerToken, ...requestData } = data
  return {
    method: 'POST',
    uri,
    body: requestData,
    json: true,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  }
}

const shuffle = (array) => {
  let counter = array.length
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter)
    // Decrease counter by 1
    counter--
    // And swap the last element with it
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

const triggerSlackPoll = async (appId, text) => {
  const lunchList = await getSpecificLunchSpots({ appId, text })
  if (!lunchList.length) return []
  const url1 = await tiny(lunchList[0].url)
  const url2 = await tiny(lunchList[1].url)
  const url3 = await tiny(lunchList[2].url)
  return {
    spot1: {
      name: lunchList[0].name,
      url: url1,
      value: JSON.stringify({ ...lunchList[0], type: text }),
    },
    spot2: {
      name: lunchList[1].name,
      url: url2,
      value: JSON.stringify({ ...lunchList[1], type: text }),
    },
    spot3: {
      name: lunchList[2].name,
      url: url3,
      value: JSON.stringify({ ...lunchList[2], type: text }),
    },
  }
}

const mongoClient = (teamId) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
      if (err) reject(err)
      const db = client.db('lunch')
      const collection = db.collection(teamId)
      resolve(collection)
    })
  })
}

module.exports = {
  getRandomInt,
  getRandomSpot,
  getSpecificLunchSpots,
  mongoClient,
  options,
  shuffle,
  triggerSlackPoll,
}
