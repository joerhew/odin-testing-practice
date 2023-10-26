module.exports.capitalize = (string) => {
  const firstLetter = string[0].toUpperCase()
  const rest = string.slice(1,string.length)
  const capitalizedString = firstLetter.concat(rest)
  
  return capitalizedString
}

module.exports.reverseString = (string) => {
  let reversedString = ''
  for (let i = string.length-1; i >= 0; i--) {
    reversedString = reversedString.concat(string[i])
  }
  return reversedString
}

module.exports.calculator = {
  add: (firstNum, secondNum) => {
    return firstNum + secondNum
  },
  subtract: (firstNum, secondNum) => {
    return firstNum - secondNum
  },
  divide: (firstNum, secondNum) => {
    return firstNum / secondNum
  },
  multiply: (firstNum, secondNum) => {
    return firstNum * secondNum
  }
}

module.exports.caesarCipher = (string, shiftFactor) => { //Refactored below commented-out code by ChatGPT
  const aCharCode = 'a'.charCodeAt(0)
  const ACharCode = 'A'.charCodeAt(0)

  let result = ''

  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    let charCode = char.charCodeAt(0)

    if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode(((charCode - aCharCode + shiftFactor) % 26) + aCharCode)
    } else if (char >= 'A' && char <= 'Z') {
      result += String.fromCharCode(((charCode - ACharCode + shiftFactor) % 26) + ACharCode)
    } else {
      result += char
    }
  }

  return result
}

/*module.exports.caesarCipher = (string, shiftFactor) => {
  const letters = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "i": 8,
    "j": 9,
    "k": 10,
    "l": 11,
    "m": 12,
    "n": 13,
    "o": 14,
    "p": 15,
    "q": 16,
    "r": 17,
    "s": 18,
    "t": 19,
    "u": 20,
    "v": 21,
    "w": 22,
    "x": 23,
    "y": 24,
    "z": 25,
  }
  const numOfLetters = Object.keys(letters).length
  let stringToArray = []
  let newString = ''

  for (let i = 0; i < string.length; i++) {
    stringToArray.push(string[i])
  }

  stringToArray.forEach(oldLetter => {
    const isUpperCase = (oldLetter == oldLetter.toUpperCase())
    if (isUpperCase) oldLetter = oldLetter.toLowerCase()

    const oldNum = letters[oldLetter]

    if (oldNum === undefined) return newString += oldLetter
    
    let newLetter
    if (oldNum + shiftFactor <= numOfLetters - 1) {
      newLetter = Object.keys(letters).find(l => letters[l] === oldNum + shiftFactor)
    } else {
      newLetter = Object.keys(letters).find(l => letters[l] === oldNum + shiftFactor - numOfLetters)
    }
    
    if (isUpperCase) newLetter = newLetter.toUpperCase()

    return newString += newLetter
  })

  return newString
}*/

module.exports.analyzeArray = (array) => {
  const avg = array.reduce((accumulator, currentVal) => accumulator + currentVal, 0) / array.length
  const min = array.sort()[0]
  const max = array.sort((a, b) => a - b)[array.length-1]
  const length = array.length

  return {
    average: avg,
    min: min,
    max: max,
    length: length
  }
}