const exercises = require('./exercises');

//write tests in this file

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/

test('Question 1: octalToDecimal', () => {
  expect(exercises.octalToDecimal('1')).toEqual(1)
  expect(exercises.octalToDecimal('10')).toEqual(8)
  expect(exercises.octalToDecimal('130')).toEqual(88)
  expect(exercises.octalToDecimal('17')).toEqual(15)
  expect(exercises.octalToDecimal('2047')).toEqual(1063)
  expect(exercises.octalToDecimal('11')).toEqual(9)
})

test('Question 2: anagram', () => {
  expect(exercises.anagram('listen', ['enlists', 'google', 'inlets', 'banana'])).toEqual([ "inlets" ])
  expect(exercises.anagram('listen', ['enlist', 'google', 'inlets', 'banana'])).toEqual([ "enlist", "inlets" ])
})

test('Question 1: ', () => {
  expect(exercises.triangle(60, 70, 50)).toEqual("acute")
  expect(exercises.triangle(30, 90, 60)).toEqual("right")
  expect(exercises.triangle(120, 50, 10)).toEqual("obtuse")
  expect(exercises.triangle(0, 90, 90)).toEqual("invalid")
  expect(exercises.triangle(50, 50, 50)).toEqual("invalid")

})


test('Question 1: ', () => {
  expect(exercises.fridayThe13ths(1986)).toEqual(1)
  expect(exercises.fridayThe13ths(2015)).toEqual(3)
  expect(exercises.fridayThe13ths(2017)).toEqual(2)
})