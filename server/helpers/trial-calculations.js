const daysLeftInTrial = (startTime) => {
  const timeDifferenceDays = (Date.now() - startTime) / 1000 / 86400
  if (timeDifferenceDays > 30) return 0
  return 30 - parseInt(timeDifferenceDays)
}

module.exports = {
  daysLeftInTrial,
}
