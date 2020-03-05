var daysInMonth = require('./daysInMonth')

function betweenDate(startDate, endDate) {
    const result = { day: 0, hour: 0, min: 0, sec: 0, ms: 0 }
    result.year = endDate.getFullYear() - startDate.getFullYear()
    if (startDate.getMonth() > endDate.getMonth()) {
        result.year = result.year - 1
        result.month = 12 - startDate.getDate() + endDate.getDate()
    } else {
        result.month = endDate.getMonth() - startDate.getMonth()
    }

    if (startDate.getDate() > endDate.getDate() || result.month > 0) {
        result.month = result.month - 1

        result.day =
            daysInMonth(startDate.getFullYear(), startDate.getMonth()) -
            startDate.getDate() +
            endDate.getDate()
    } else {
        result.day = endDate.getDate() - startDate.getDate()
    }

    if (startDate.getHours() > endDate.getHours()) {
        result.day = result.day - 1
        result.hour = 24 - startDate.getHours() + endDate.getHours()
    } else {
        result.hour = endDate.getHours() - startDate.getHours()
    }

    if (startDate.getMinutes() > endDate.getMinutes()) {
        result.hour = result.hour - 1
        result.min = 60 - startDate.getMinutes() + endDate.getMinutes()
    } else {
        result.min = endDate.getMinutes() - startDate.getMinutes()
    }

    if (startDate.getSeconds() > endDate.getSeconds()) {
        result.min = result.min - 1
        result.sec = 60 - startDate.getSeconds() + endDate.getSeconds()
    } else {
        result.sec = endDate.getSeconds() - startDate.getSeconds()
    }
    result.ms = endDate.getMilliseconds() - startDate.getMilliseconds()
    return result
}

function parseDurationMs(durationMs) {
    let result = { day: 0, hour: 0, min: 0, sec: 0, ms: 0 }
    const sec = 1000
    const min = 60 * sec
    const hour = 60 * min
    const day = 24 * hour

    result.day = Math.floor(durationMs / day)
    result.hour = Math.floor((durationMs - result.day * day) / hour)
    result.min = Math.floor(
        (durationMs - result.day * day - result.hour * hour) / min
    )
    result.sec = Math.floor(
        (durationMs -
            result.day * day -
            result.hour * hour -
            result.min * min) /
            sec
    )
    result.ms = Math.floor(
        durationMs -
            result.day * day -
            result.hour * hour -
            result.min * min -
            result.sec * sec
    )
    return result
}

function duration(durationMs, date = null) {
    let result = { day: 0, hour: 0, min: 0, sec: 0, ms: 0 }
    if (date) {
        var futureDate = new Date(date.valueOf() + durationMs)
        result = betweenDate(date, futureDate)
    } else {
        result = parseDurationMs(durationMs)
    }
    return result
}

module.exports = duration
