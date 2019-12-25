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

let num1 = [10, 12, 14];
let num2 = [15, 20, 25];

function swap(num1, num2) {
    let tmp = num1[0];
    num1[0] = num2[0];
    num2[0] =tmp;
    console.log(num1, num2);
}

swap(num1, num2);

console.log(num1, num2);

function sangHuc(str) {
    let hpCarNam = document.getElementById('hpNam').textContent;
    hpCarNam -= str;
    document.getElementById('hpNam').textContent = hpCarNam;
}