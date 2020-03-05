const duration = require('./duration')
const sub = require('./subtraction')

describe('duration', () => {
    const sec = 1000
    const min = 60 * sec
    const hour = 60 * min
    const day = 24 * hour

    it('check parsing miliseconds', () => {
        const variables = [869230100, 899230500, 877230700, 100]
        variables.forEach(value => {
            const result = duration(value)
            expect(
                result.day * day +
                    result.hour * hour +
                    result.min * min +
                    result.sec * sec +
                    result.ms
            ).toBe(value)
        })
    })
    it('check parsing miliseconds from date', () => {
        const date1 = new Date('1990/01/11 17:01:10')
        const date2 = new Date('1990/03/01 17:01:10')
        const date3 = new Date('1990/01/31 23:00:00')
        const date4 = new Date('1991/01/31 23:00:00')
        const result = duration(sub(date2, date1), date1)
        const result2 = duration(sub(date3, date1), date1)
        const result3 = duration(sub(date4, date1), date1)
        expect(result).toEqual({
            day: 21,
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0,
            year: 0,
            month: 1
        })
        expect(result2).toEqual({
            day: 20,
            hour: 5,
            min: 58,
            sec: 50,
            ms: 0,
            year: 0,
            month: 0
        })
        expect(result3).toEqual({
            day: 20,
            hour: 5,
            min: 58,
            sec: 50,
            ms: 0,
            year: 1,
            month: 0
        })
    })
})
