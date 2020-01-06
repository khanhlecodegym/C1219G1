// let myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// }

let myConcat = (arr1, arr2)  =>  arr1.concat(arr2);

console.log([1,2], [3,4,5]);

const realNumberArray = [4,5,6, 5.6, 8.4, 9.2];
const squareList = (arr) => {
    // const squareedIntergers = arr;
    const squareedIntergers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squareedIntergers;
}

const squareedIntergers = squareList(realNumberArray);
console.log("TCL: squareedIntergers", squareedIntergers)
