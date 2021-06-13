// khai báo biến
/*
var -> hoisting -> cac bien day len tren dau
let -> scope {}
const
*/
var a = 7;
var x = 'hi';
var isHandsome = true;
var students = ['toan', 'hien'];

let person = {
    fullName: 'hl'
}

if(true){
    let k = 10;
}

// console.log(k);   khong duoc su dung

const pi = 2.14; // chỉ access và ko thể redefine (ko the thay doi gia tri)

// conditional (biểu thức điều kiện)

if(5>2){
    console.log('hl w');
}else{
    console.log('wrong');
}

//switch case


switch(5){
    case 1 :
        console.log('hello');
    case 2 :
        console.log('hi');
    case 5 :
        console.log('run');
}

// loop - vòng lặp

for(let i = 0; i<5 ; i++ ){
    console.log(i);
}

while (i<10){
    i++;
    console.log(i);
}

//for...in
for (const key in object) {
    
}
//for...of
for (const value of array) {
    
}

//Array
/*
    .pop(): xoa phan tu cuoi
    .push(gia tri): day phan tu moi vao cuoi
    .shift(): day ra
    .unshift(): day vao dau
    .indexOf(gia tri can tim): vi tri dau tien xuat hien
    .sort(): sap xep mang
    .forEach(function(value) {-value-})
    .filter(function(value) {-return dieu kien ma chung ta muon loc-})
    .map(function(value) {-return bieu thuc- })
    .reduce(function(val, total) {}, 0)
*/

// Object: khai bao 1 doi tuong

let long = {
    fullName : 'hoang long',
    address : 'hd',
    greeting: function(){
        console.log('hello');
    }
}

long.greeting()

// Function

function sum(a,b){
    return a+b // neu ko co return -> undefined
    console.log(a+b);
}

let a = sum(5,10) // 15