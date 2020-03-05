var parseDate = require('./parseDate')

/**
 * check date is today
 *
 *  @param  {String} firstDate
 *  @param  {String} secondDate - optional
 * @returns {Boolean} Returns true or false.
 *
 */

function isEarlier(firstDate, secondDate = new Date()) {
    if (secondDate instanceof Date) {
        return (
            (firstDate instanceof Date ? firstDate : parseDate(firstDate)) <
            secondDate
        )
    }
    return parseDate(firstDate) < parseDate(secondDate)
}

module.exports = isEarlier
