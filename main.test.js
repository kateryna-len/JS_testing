
const { countNumber, perfectNumber } = require('./main')

describe('countNumber', () => {
  test('Need to get the number of digits in the number', () => {
    expect(countNumber(444)).toBe(3)
    expect(countNumber(345.678)).toBe(6)
    expect(countNumber(89764)).toBe(5)
  })
  test('Тeed to check if the value is a number', () => {
    let result = 'must be number'
    expect(countNumber('run')).toBe(result)
    expect(countNumber('intro')).toBe(result)
  })
})
describe('perfectNumber', () => {
  test('Need to check the number is perfect', () => {
    let result = 'Досконале число'
    let error = 'Не досконале число'
    expect(perfectNumber(6)).toBe(result)
    expect(perfectNumber(8)).toBe(error)
    expect(perfectNumber(28)).toBe(result)
    expect(perfectNumber(496)).toBe(result)
    expect(perfectNumber(44)).toBe(error)
  })
})
