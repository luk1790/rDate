const daysInMonth = require('./daysInMonth')

describe('days in month', () => {
    it('check days in february 2019', () => {
        expect(daysInMonth(2019, 2)).toBe(28)
    })
    it('check days in february 2020', () => {
        expect(daysInMonth(2020, 2)).toBe(29)
    })
})
