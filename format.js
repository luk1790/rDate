/**
 * Parse date
 *
 * @param  {Date|Number} date
 * @param  {String} format="DD-MM-YYYY"
 * @returns {String} Returns the string in correct format.
 *
 */

const parseNumber = dateNumber =>
    dateNumber.toString().length === 1 ? `0${dateNumber}` : `${dateNumber}`

function format(date, format = 'DD-MM-YYYY') {
    if (!(date instanceof Date) || isNaN(date)) {
        return false
    }
    // dodac formatowanie dla milisekund, np 86400000 = 1day
    let tempDate = format.toString()
    tempDate = tempDate.replace('DD', `${parseNumber(date.getDate())}`)
    tempDate = tempDate.replace('MM', `${parseNumber(date.getMonth() + 1)}`)
    tempDate = tempDate.replace('YYYY', `${date.getFullYear()}`)
    tempDate = tempDate.replace(
        'YY',
        `${date
            .getFullYear()
            .toString()
            .slice(2, 4)}`
    )

    return tempDate === format.toString() ? false : tempDate
}

module.exports = format
