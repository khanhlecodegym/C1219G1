// let age1 = parseInt(prompt("Hay nhap vao tuoi cua ban"));
let age = ["Sang", "Linh"];
let obj = {
    name: 'sang',
    age: 12
}
const GENDER_SANG = "Nam";
let ageSang =10 ;
let ageTam = '10' ;
let sumAge = ageSang !== ageTam;


function Check(name = 'Sang') {
    // if (!sumAge || true) {
    //     document.getElementById("name").innerHTML = name;
    // }
    alert(name);
}

let age2 = prompt("Hay nhap vao tuoi cua ban");
Check(age2);


// document.write(name);
console.log("Toi ten la: " + name);
