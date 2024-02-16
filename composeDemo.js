import { compose } from "redux"

function removeSpaces(string) {
    return string.split(' ').join('')
}

// console.log(removeSpaces('abc def ghi'));

function repeatString(string) {
    return string + string // can also use string.repeat(2)
}

// console.log(repeatString('ayush'));

function convertToUpper(string) {
    return string.toUpperCase()
}

// console.log(convertToUpper('ayush'));

const input = 'abc def ghi'

// const output = convertToUpper(repeatString(removeSpaces(input)))

// console.log(output);

const composedFunction = compose(removeSpaces, repeatString, convertToUpper)

console.log(composedFunction(input));