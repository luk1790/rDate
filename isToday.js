/**
 * check date is today
 *
 * @param  {String} date
 * @returns {Boolean} Returns true or false.
 *
 */

function isToday(date) {
    if (typeof date === 'object') return false
    let today = new Date()
    let tableDate = date.split('/')
    let month = tableDate[1]
    let day = tableDate[2]
    let year = tableDate[0]
    return (
        today.getDate() === parseInt(day) &&
        today.getMonth() + 1 === parseInt(month) &&
        today.getFullYear() === parseInt(year)
    )
}

module.exports = isToday
