const isLater = require('./isLater')
describe('isLater', () => {
    describe('check with date now', () => {
        it('is later than today', () => {
            expect(isLater('3000-01-17')).toBeTruthy()
        })
        it('is not later than today', () => {
            expect(isLater('1990-01-17')).toBeFalsy()
        })
    })
    describe('String format', () => {
        const dateFirst = '2020-12-01'
        const dateSecond = '2020-10-01'
        it('firstDate is later than secondDate - string format', () => {
            expect(isLater(dateFirst, dateSecond)).toBeTruthy()
        })
        it('secondDate is not later than firstDate - string format', () => {
            expect(isLater(dateSecond, dateFirst)).toBeFalsy()
        })
    })

    describe('Date format', () => {
        const dateFirst = new Date(2020, 12, 1)
        const dateSecond = new Date(2020, 10, 1)
        it('firstDate is later than secondDate - date format', () => {
            expect(isLater(dateFirst, dateSecond)).toBeTruthy()
        })
        it('secondDate is not later than firstDate - date format', () => {
            expect(isLater(dateSecond, dateFirst)).toBeFalsy()
        })
    })
})
