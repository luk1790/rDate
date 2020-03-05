const sub = require('./subtraction')

describe('subtraction', () => {
    it('is correct', () => {
        const date = new Date('2019/01/17')
        const datePlusOne = new Date('2019/01/18')
        expect(sub(datePlusOne, date)).toBe(1000 * 60 * 60 * 24)
    })
})
