const parseDate = require('./parseDate')
describe('parseDate', () => {
    it('is correct data YYYY/MM/DD', () => {
        expect(parseDate('2020/10/01')).toMatchObject(new Date(2020, 9, 1))
    })
    it('is incorrect data', () => {
        expect(parseDate('2020/30/31')).not.toMatchObject(new Date(2020, 9, 1))
    })
    it('is incorrect format of data', () => {
        expect(parseDate('2020a30/31')).toBeFalsy()
    })
    it('is correct data DD/MM/YYYY', () => {
        expect(parseDate('17/01/1990')).toMatchObject(new Date(1990, 0, 17))
    })
    it('is correct data YYYY-MM-DD', () => {
        expect(parseDate('2019-5-25')).toMatchObject(new Date(2019, 4, 25))
    })
    it('is correct data DD-MM-YYYY', () => {
        expect(parseDate('25/5/2019')).toMatchObject(new Date(2019, 4, 25))
    })
})
