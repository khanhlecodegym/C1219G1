// function main(num) {
//     let numberInput = num;
//     let arrayRs = [];
//     arrayRs = createArray(numberInput);

//     displayArray(arrayRs);

//     let sumArr = sumArray(arrayRs);
// }

// function createArray(param1) {
//     let arrayTpm = [];
//     for(let i = 0; i < param1 ; i++) {
//         let ranNum = Math.round(Math.random()*100);
//         arrayTpm.push(ranNum);
//     }

//     return arrayTpm;
// }

// function displayArray(arr) {
//     for (const key in arr) {
//         console.log(arr[key]);
        
//     }
// }
// main(10);

// let num1 = [10, 12, 14];
// let num2 = [15, 20, 25];

// function swap(num1, num2) {
//     let tmp = num1[0];
//     num1[0] = num2[0];
//     num2[0] =tmp;
//     console.log(num1, num2);
// }

// swap(num1, num2);

// console.log(num1, num2);

// function sangHuc(str) {
//     let hpCarNam = document.getElementById('hpNam').textContent;
//     hpCarNam -= str;
//     document.getElementById('hpNam').textContent = hpCarNam;
// }

// function Phone(_name, _color) {
//     this.name = _name;
//     this.color = _color;

//     this.showVideo = function (show) {
//         console.log(`mo ${show}`);
//     }

//     this.changeName = function (name) {
//         this.name = name;
//     }

//     this.info = function() {
//         return `Name : ${this.name} Color ${this.color}`
//     }
// }

// let phoneNam = new Phone('Nokia', 'Chấm bi');
// console.log(phoneNam.color);
// console.log(phoneNam.name);
// phoneNam.showVideo('vtv3');
// phoneNam.changeName('Iphone X');
// console.log(phoneNam.name);

// document.write(phoneNam.info());

let Circle = function(radius, color, x, y) {
    this.radius = radius;
    this.color = color;
    this.x = x;
    this.y = y;
    this.distance = 2;
    this.getArea = function() {
        return (Math.PI * this.radius * this.radius).toFixed(3);
    }

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius ,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.move = function() {
        this.x += this.distance;
    }

    this.moveDown = function() {
        this.y += this.distance;
    }

    this.drawArea = function(ctx) {
        ctx.font = "30px Arial";
        ctx.fillText(`Dien tich : ${this.getArea()}`, 10, 50);
    }


    // this.clearCanvas = fun
}

class Reactangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}


// let cir2 = new Circle(50, 'red');
// console.log(`Dien tich" ${cir2.getArea()}`);

let game = document.getElementById('gameDemo');
let ctx = game.getContext('2d');
let cir1 = new Circle(20, 'red', 100, 200);
let cir2 = new Circle(20, 'blue', 200, 200);
cir1.draw(ctx);


cir2.draw(ctx);

function move() {
    ctx.clearRect(0, 0, 500, 500);
    cir1.move();
    cir1.drawArea(ctx);
    cir2.moveDown();
    cir1.draw(ctx);
    cir2.draw(ctx);
    requestAnimationFrame(move, 1000)
    // setTimeout(move, 1000);
}

move();