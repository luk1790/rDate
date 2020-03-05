const isToday = require('./isToday')
describe('Today', () => {
    it('is today', () => {
        const today = new Date()
        expect(
            isToday(
                `${today.getFullYear()}/${today.getMonth() +
                    1}/${today.getDate()}`
            )
        ).toBeTruthy()
    })

    it('is not today', () => {
        const date = '2020/02/30'
        expect(isToday(date)).toBeFalsy()
    })

    it('is incorrect type - object', () => {
        const date = new Date()
        expect(isToday(date)).toBeFalsy()
    })
    it('is incorrect format', () => {
        const date = '10-10-1990'
        expect(isToday(date)).toBeFalsy()
    })
})
