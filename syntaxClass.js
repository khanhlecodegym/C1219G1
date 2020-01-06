// let SpaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

let zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

// function makeClass() {
//     class Vegetable {
//         constructor(name) {
//             this.name = name;
//         }
//     }

//     return Vegetable;
// }

// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log("TCL: carrot", carrot.name);


class Book {
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthoer) {
        this._author = updatedAuthoer;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp-32);
        }

        get temperature() {
            return this._temp;
        }

        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = makeClass();
const carrot = new Thermostat(76);
console.log("TCL: carrot", carrot.temperature);