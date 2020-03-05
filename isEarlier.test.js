const isEarlier = require('./isEarlier')
describe('isEarlier', () => {
    describe('check with date now', () => {
        it('is earlier than today', () => {
            expect(isEarlier('1990-01-17')).toBeTruthy()
        })
        it('is not earlier than today', () => {
            expect(isEarlier('3000-01-17')).toBeFalsy()
        })
    })
    describe('String format', () => {
        const dateFirst = '2020-10-01'
        const dateSecond = '2020-12-01'
        it('firstDate is earlier than secondDate - string format', () => {
            expect(isEarlier(dateFirst, dateSecond)).toBeTruthy()
        })
        it('secondDate is not earlier than firstDate - string format', () => {
            expect(isEarlier(dateSecond, dateFirst)).toBeFalsy()
        })
    })

    describe('Date format', () => {
        const dateFirst = new Date(2020, 10, 1)
        const dateSecond = new Date(2020, 12, 1)
        it('firstDate is earlier than secondDate - date format', () => {
            expect(isEarlier(dateFirst, dateSecond)).toBeTruthy()
        })
        it('secondDate is not earlier than firstDate - date format', () => {
            expect(isEarlier(dateSecond, dateFirst)).toBeFalsy()
        })
    })
})
