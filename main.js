// Task 1
const arrToCount = [ 1, 7, 4, 77, 737];

function getSevenCol(arr) {
  return arr.reduce(function (total, elem) {
    return total + elem.toString().split('').reduce(function(total, elem){
      return total + (elem === '7');
    },0)
  }, 0)
};
console.log(getSevenCol(arrToCount));
//Task 2
const arrToConcat = ["a", "b", "c", "d", "3", "f"];

function arrToStr(arr) {
  return arr.reduce(function (result, elem){
    return result.concat(elem);
  }, '')
};
console.log(arrToStr(arrToConcat));
