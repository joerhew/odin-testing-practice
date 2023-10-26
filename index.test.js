const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions.js')

describe('string manipulation', () => {
  it('capitalizes a string', () => {
    const string = 'hello'
    
    expect(capitalize(string)).toBe('Hello')
  })

  it('reverses a string', () => {
    const string = 'can this be reversed?'

    expect(reverseString(string)).toBe('?desrever eb siht nac')
  })
})

describe('calculator', () => {
  it('adds (1 + 2 = 3)', () => {
    expect(calculator.add(1,2)).toBe(3)
  })

  it('subtracts (100 - 30 = 70)', () => {
    expect(calculator.subtract(100,30)).toBe(70)
  })

  it('divides (21 / 3 = 7)', () => {
    expect(calculator.divide(21,3)).toBe(7)
  })

  it('multiplies (4 * 20 = 80', () => {
    expect(calculator.multiply(4,20)).toBe(80)
  })
})

describe('caesar cipher', () => {
  it('shifts "apple"', () => {
    const string = "apple"
    const shiftFactor = 1

    expect(caesarCipher(string,shiftFactor)).toBe('bqqmf')
  })

  it('works with a shift factor of greater than 1', () => {
    const string = "apple"
    const shiftFactor = 2

    expect(caesarCipher(string,shiftFactor)).toBe('crrng')
  })

  it('loops back at the end of the alphabet ("topaz")', () => {
    const string = "topaz"
    const shiftFactor = 1

    expect(caesarCipher(string,shiftFactor)).toBe('upqba')
  })

  it('keeps the same case ("APPLE")', () => {
    const string = "APPLE"
    const shiftFactor = 1

    expect(caesarCipher(string,shiftFactor)).toBe('BQQMF')
  })

  it('ignores punctuation', () => {
    const string = "Bar."
    const shiftFactor = 1

    expect(caesarCipher(string,shiftFactor)).toBe('Cbs.')
  })
})

describe('analyze array', () => {
  it('calculates the average', () => {
    const array = [1,2,3,4,5]

    expect(analyzeArray(array).average).toBe(3)
  })
  
  it('calculates the min', () => {
    const array = [75,50,22,89,51]

    expect(analyzeArray(array).min).toBe(22)
  })

  it('calculates the max', () => {
    const array = [75,500000,22,89,51]

    expect(analyzeArray(array).max).toBe(500000)
  })

  it('calculates the length', () => {
    const array = [75,50,22,89,51,10,2,502,3,1]

    expect(analyzeArray(array).length).toBe(10)
  })
})