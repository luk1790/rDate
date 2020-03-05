const addition = require('./addition')
const format = require('./format')

describe('addition', () => {
    it('add two days', () => {
        const date = new Date('1990/01/11')
        const dateWith2Days = new Date('1990/01/13')
        expect(addition(date, { day: 2 }).getTime()).toBe(
            dateWith2Days.getTime()
        )
        expect(format(addition(date, { day: 2 }), 'YYYY/MM/DD')).toBe(
            format(dateWith2Days, 'YYYY/MM/DD')
        )
    })
    it('add 4h 30min 4sec 100ms', () => {
        const date = new Date('1990/01/11 12:00:00')
        const dateWithAddition = new Date('1990/01/11 16:30:04.100')
        const dateModification = addition(date, {
            hour: 4,
            minute: 30,
            second: 4,
            milisecond: 100
        })
        expect(dateModification.getTime()).toBe(dateWithAddition.getTime())
    })
})
