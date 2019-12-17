// let btn = document.getElementById('btn');
// btn.onclick = function() {
//     console.log("bai toa dien tich");
//     let width = +document.getElementById('width').value;
//     console.log("TCL: btn.onclick -> width", width)
//     let height = +document.getElementById('height').value;

//     if (width >= 0 && height >= 0) {
//         let area = width * height;
//         console.log("TCL: btn.onclick -> area", area);
        
//     } else {
//         console.log("Nhap sai");

//     }
// }

// let btn1 = document.getElementById('btn1');
// btn1.onclick = function() {
//     console.log("bai toan switch case");
//     let age = +document.getElementById('age').value;
    
//     switch(age) {
//         case 18 :
//         case 20 :
//             console.log("Thuật đủ tuổi đi làm");
//             break;
//         case 25 :
//             console.log("Thuật đủ tuổi lấy vợ");
//             // break;
//         default: 
//             console.log("Thuật đang phấn đấu vì tương lai");
//     }
// }

document.addEventListener('keydown', move)
let objImg = document.getElementById('car');
let left = 100;
const distance = 20;
function move(e) {
    switch (e.keyCode) {
        case 39:
            let tpm = parseInt(objImg.style.left);
            objImg.style.left = tpm + distance + 'px';
            break;
    
        default:
            break;
    }
    
}
// document.write(result);

// let powerNam = Math.floor(Math.random()*10) + 1;
// let powerSang = Math.floor(Math.random()*10) + 1;

// if (powerNam > powerSang) {
//     console.log("Nam Win!!!")
// } else {
//     console.log("Sang Win!!!")
// }
// powerNam > powerSang ? console.log("Nam Win!!!") : console.log("Sang Win!!!");

// console.log(Math.random());
