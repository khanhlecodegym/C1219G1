let num1 = '7';
let num2 = 77;
let num3 = num1 !== num2;
let arr = ["KHoa", "Nam"];
let obj1 = {
    name: "Sáng",
    age: 18
}

let obj2 = {
    name: "Sáng",
    age: 18
}

// let result = ++obj1.age < obj2.age;

if (num2 > 18) {
    document.write(obj1.name + " Đủ tuổi");
} else {
    document.write(obj1.name + " Ko Đủ tuổi");
}

let btn = document.getElementById('btn');
btn.onclick = function() {
    console.log("Đưa source lên cho Nguyên");
}

// document.write(result);