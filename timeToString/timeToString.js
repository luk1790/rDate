const disctionaryPL = require('./pl-PL');
/**
 * translate time to words
 *
 *  @param  {String} time
 *  @param  {String} lang - optional
 * @returns {String} Returns time in words.
 *
 */

function timeToString(time, lang = 'pl') {
    let allDictionary = { pl: {} };
    allDictionary['pl'] = disctionaryPL('array');
    if (allDictionary[lang]) {
        let dictionary = allDictionary[lang];
        let [hours, minutes] = time.split(':');
        let stringTime = { hour: dictionary.hours[hours], minutes: '' };
        if (minutes > 9 && minutes < 20) {
            stringTime.minutes = dictionary.teens[minutes % 10];
        } else {
            let minutesString = minutes.toString();
            stringTime.minutes = `${dictionary.tens[minutesString[0]]} ${
                dictionary.minutes[minutesString[1]]
            }`;
        }
        return `${stringTime.hour} ${stringTime.minutes}`;
    }
}

module.exports = timeToString;
