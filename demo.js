// let Car = function(name, model, weight, color) {
//     this.name = name;
//     this.model = model;
//     this.weight = weight;
//     this.color = color;
// }


class Car {
    constructor(name, model, weight) {
        // console.log('constructor');
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = 'red';
    }

    getInfo() {
        return `Name ${this.name}`;
    }

    get Color() {
        return this.color;
    }

    set Color(newColor) {
        this.color = newColor;
    }
}

class Vehicle extends Car {
    constructor(name, model, weight) {
        super(name, model, weight);
    }
}

let ve = new Vehicle('BMW', '2000', 200, 'blue');
ve.Color = 'blue';
console.log("TCL: ve", ve.Color)


let car = new Car('BMW', '2000', 200, 'blue');
console.log("TCL: car", car);

// let myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// let myConcat = (arr1, arr2)  =>  arr1.concat(arr2);

// console.log([1,2], [3,4,5]);

const numberArray = [4,5,6, 5.6, 8.4, 9.2, 10];
// numberArray[0] = 8;
const getList = (arr) => {
    // const intergersList = arr;
    const intergersList = arr.filter(num => Number.isInteger(num) && num > 5).map(x => x*x);
    return intergersList;
}

const intergersList = getList(numberArray);
console.log("TCL: intergersList", intergersList)