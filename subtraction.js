function sub(firstDate, secondDate) {
    if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
        return false
    }
    return firstDate.getTime() - secondDate.getTime()
}

module.exports = sub
