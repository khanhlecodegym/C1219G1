let gender = "Nam";
function sayHello(name = '', age = 0) {
    return  `Hello ${name} Năm nay toi ${age} tuổi`;
}

sayHello("Sáng", 10);

function sum(a = 0,b = 0) {
    return a+ b;
}

let rs = sum(6);
console.log(rs);
