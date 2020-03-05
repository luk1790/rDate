function addition(dateStart, addMap) {
    let { day, hour, minute, second, milisecond } = addMap
    let msToAdd = 0
    let times = {
        ms: 1000,
        sec: 60 * 1000,
        min: 60 * 60 * 1000,
        h: 24 * 60 * 60 * 1000
    }
    if (milisecond) {
        msToAdd += milisecond
    }
    if (second) {
        msToAdd += second * times.ms
    }
    if (minute) {
        msToAdd += minute * times.sec
    }
    if (hour) {
        msToAdd += hour * times.min
    }
    if (day) {
        msToAdd += day * times.h
    }
    return new Date(dateStart.valueOf() + msToAdd)
}

module.exports = addition
