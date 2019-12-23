// let students = ['Nguyen', 'Nam', 'khoi', 'Sang'];
// students.unshift('Hien');

// let name = students.shift();
// console.log("TCL: name", name)

// let flag = false;
// for (let stu of students) {
//     // if (stu.toLowerCase() === 'khoi') {
//     //     flag = true;
//     //     break;
//     // }
//     console.log(stu);
// }

// if (flag) {
//     console.log('Khoi co trong lop');
// } else {
//     console.log('Ko co trong lop');
// }

// let obj1 = { id: '01', name: "Nam", class: 'C12'}

// let students = [
//     { id: '01', name: "Nam", class: 'C12', likes: ['DB', 'BB']},
//     { id: '02', name: "Hien", class: 'C12'},
//     { id: '03', name: "Thuat", class: 'C12'},
//     { id: '04', name: "Khoa", class: 'C12'}
// ]
// let bt1 = {id: '05', name: "Nam3", class: 'C122'};
// students.unshift(bt1);
// let result = "<table> <tr><td>id</td><td>name</td><td>class</td></tr>";
// for (const stu of students) {
//     debugger;
//     let tmp = "<tr>";
//     tmp += "<td>" + stu.id + "</td>" + "<td>" + stu.name + "</td>" + "<td>" + stu.class + "</td></tr>"  
//     result += tmp;
// }
// document.write(result);
// console.log(students[2].name);

let rows = 4;
let columns = 5;


let arrayNum = new Array(rows);
for (let i = 0; i < arrayNum.length; i++) {
    arrayNum[i] = new Array(columns); 
}

for (let i = 0; i < arrayNum.length; i++) {
    for (let j = 0; j < arrayNum[i].length; j++) {
        arrayNum[i][j] = Math.floor(Math.random()*1000 + 1);
        
    }
    
}

let sumArr = 0;
for (let i = 0; i < arrayNum.length; i++) {
    for (let j = 0; j < arrayNum[i].length; j++) {
        sumArr += arrayNum[i][j];
        
    }
    
}

let result = "<table> <tr><td>id</td><td>name</td><td>class</td><td>class</td></tr>";
// for (const stu of students) {
//     debugger;
//     let tmp = "<tr>";
//     tmp += "<td>" + stu.id + "</td>" + "<td>" + stu.name + "</td>" + "<td>" + stu.class + "</td></tr>"  
//     result += tmp;
// }

for (let i = 0; i < arrayNum.length; i++) {
    let tmp = "<tr>";
    for (let j = 0; j < arrayNum[i].length; j++) {
        tmp += "<td>" + arrayNum[i][j] + "</td>"
        
    }
    tmp += "</tr>";
    result += tmp;
}
document.write(result);
// console.log(sumArr);