/**
 *
 *  @param  {String} date
 *  @returns {Date} Returns object with date or false.
 *  '2020/10/01', '01/10/2020', '2020-10-01', '01-10-2020'
 */
function parseDate(date) {
    if (typeof date === 'string') {
        let parsedDate = date.split('/')
        if (parsedDate.length === 1) parsedDate = date.split('-')
        if (parsedDate.length !== 1) {
            if (parsedDate[0] && parsedDate[0].length === 4) {
                return new Date(
                    parseInt(parsedDate[0], 10),
                    parseInt(parsedDate[1], 10) - 1,
                    parseInt(parsedDate[2], 10)
                )
            }
            if (parsedDate[2] && parsedDate[2].length === 4) {
                return new Date(
                    parseInt(parsedDate[2], 10),
                    parseInt(parsedDate[1], 10) - 1,
                    parseInt(parsedDate[0], 10)
                )
            }
            return false
        }
    } else if (date instanceof Date) {
        return date
    }
    return false
}

module.exports = parseDate
