function octalToDecimal(str) {
  let arr = str.split('').reverse();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let numConv = Number(arr[i]);
    let expNum = 8 ** i;
    sum += expNum * numConv;
  }
  return sum;
};

function anagram(word, arr) {
  let newArr = [];
  let sorting = word.split('').sort().join();
  arr.filter(a => a.split('').sort().join() === sorting ? newArr.push(a) : "Try again.");
  return newArr;
};

function triangle(a, b, c) {
  return a <= 0 || b <= 0 || c <= 0 || a + b + c < 180 ? "invalid"
  : a == 90 || b == 90 || c == 90 ? "right"
  : a > 90 || b > 90 || c > 90 ? "obtuse"
  : a < 90 || b < 90 || c < 90 ? "acute" : "not a triangle";
};

function fridayThe13ths(year) {
  let count = 0;
  for (let i = 0; i <= 12; i++) {
    let date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
  }
  return count;
};

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths
};
