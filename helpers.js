const { tiny } = require('tiny-shortener')
const MongoClient = require('mongodb').MongoClient

require('dotenv').config()

// Connection URL - local
// const url = 'mongodb://localhost:27017'

// Connecttion URL - production
const url = `mongodb+srv://slotdp02:${process.env.MONGO_PASSWORD}@cluster0-8cwp7.mongodb.net/test?retryWrites=true`

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const getRandomSpot = (arr, filteredArray) => {
  const extraRandomSpot = arr[getRandomInt(0, arr.length)]
  console.log('extraRandomSpot: ', extraRandomSpot);
  const isDuplicate = filteredArray.find(obj => (obj || {}).name === extraRandomSpot.name)
  if (isDuplicate) {
    getRandomSpot(arr, filteredArray)
  } else if (!extraRandomSpot) {
    getRandomSpot(arr, filteredArray)
  } else {
    console.log('returning extraRandomSpot: ', extraRandomSpot);
    return extraRandomSpot
  }
}

const getSpecificLunchSpots = ({ appId, text: type }) => {
  return new Promise((resolve) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      const db = client.db('lunch')
      const collection = db.collection(appId)

      collection.find().toArray()
      .then(data => {
        if (data.length < 3) return resolve([])

        let filteredList
        if (!type) {
          filteredList = [
            data[getRandomInt(0, data.length)],
            data[getRandomInt(0, data.length)],
            data[getRandomInt(0, data.length)],
          ]
          console.log('filteredList: ', filteredList);
        } else {
          const list = data.filter(lunchSpot => lunchSpot.categories.some(category => category.alias.includes(type.toLowerCase())))
          // shuffle the array
          const shuffledList = shuffle(list)
          // make sure the list is no longer than 3 spots
          filteredList = shuffledList.slice(0, 3)
        }
        // Have the filteredList now remove duplicates
        const newFilteredList = Array.from(new Set(filteredList.map(a => a.name)))
          .map(name => filteredList.find(a => a.name === name))
        console.log('newFilteredList: ', newFilteredList);
        // if the array is shorter than 3 add more to it
        while (newFilteredList.length < 3) {
          const getNewSpot = getRandomSpot(data, newFilteredList)
          // TODO this often comes back undefined, WHY?????
          console.log('getNewSpot: ', getNewSpot);
          newFilteredList.push(getNewSpot)
        }
        console.log('newFilteredList now: ', newFilteredList);
        resolve(newFilteredList)
      })
      client.close()
    })
  })
}

const options = ({ data = {}, uri = '' }) => ({
  method: 'POST',
  uri,
  body: data,
  json: true,
  headers: {
    Authorization: `Bearer ${data.bearerToken}`,
  },
})

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
  console.log('lunchList: ', lunchList);
  const url1 = await tiny(lunchList[0].url)
  const url2 = await tiny(lunchList[1].url)
  const url3 = await tiny(lunchList[2].url)
  if (!lunchList.length) return []
  return {
    spot1: {
      name: lunchList[0].name,
      url: url1,
      value: JSON.stringify(lunchList[0]),
    },
    spot2: {
      name: lunchList[1].name,
      url: url2,
      value: JSON.stringify(lunchList[1]),
    },
    spot3: {
      name: lunchList[2].name,
      url: url3,
      value: JSON.stringify(lunchList[2]),
    }
  }
}

module.exports = { getRandomInt, getRandomSpot, getSpecificLunchSpots, options, shuffle, triggerSlackPoll }
