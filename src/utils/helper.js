function parseTime(ObjectWithDatesandTimes){
    const [ dayOfWeek, month, day, year ] = ObjectWithDatesandTimes.date.toString().split(/[: ()]/)
    let [ unusedDayOfWeek, unusedMonth, unusedDay, unusedYear,hour, minute ] = ObjectWithDatesandTimes.time.toString().split(/[: ()]/)
    hour = (Number(hour) - 1).toString()
    const correctedObject = {...ObjectWithDatesandTimes, date: `${day}/${month}/${year}`, time: `${hour}:${minute}`}

    return correctedObject
}

module.exports = { parseTime }