// array là 1 chuỗi các gtri đc lưu liên tiếp trong bộ nhớ

// var a = [
//     5,
//     'hi',
//     true,
//     false
// ]
// console.log(a[0]); // truy cập phần tử của mảng
// console.log(a);
// console.log(a.length); //độ dài mảng


// for(var i=0;i<a.length;++i){
//     console.log(a[i]); //hiển thị các phần tử của mảng bằng vòng for
// }

// var i = 0;
// while(i < a.length){
//     console.log(a[i]);
//     ++i;
// }

// //phương thức


// var a=5;
// var b=8;
// var c=9;

// // if(a>b && a>c){
// //     console.log('max = ',a);
// // }else if(b>a && b>c){
// //     console.log('max = ',b);
// // }else{
// //     console.log('max = ',c);
// // }


// let sum = function (a,b) {
//     return a + b;
// }
// console.log(sum(5,6));

// //callback:
// function x(a){
//     a()
// }
// x(function(){
//     console.log('hi');
// })


// // a.forEach(function (x) {
// //     console.log(x * 2);
// // })

// for(let i=0;i<a.length;++i){
//     if('hanh'==a[i]){
//         console.log('tim thay chu hanh');
//     }
// }


// //min, max
// let num = [7,6,8,9,1,11]
// //ki thuat cam co
// let max = num[0];
// for(let i=1;i<num.length;i++){
//     if(max<num[i]){
//         max= num[i]
//     }
// }
// console.log(max);

// let mang = [1,2,3,4]
// for(let i = 0;i<10;i++){
//     mang[i]=500
// }

// mang.push(5);// thêm 1 ptu ở cuối mảng
// mang.pop()// xoá 1 ptu ở cuối mảng và trả về nó
// mang.unshift(66)//chèn 1 ptu vào đầu mảng
// mang.shift()//lấy ra ptu đầu tiền của mảng
// mang.find()
// mang.indexOf(index)

// let mang1 = [0,3];
// mang.concat(mang1)//nối mảng
// mang.copyWithin()

// console.log(mang);




// let arr=[1,3,4,5,2,8,9];
 
// let newArr = arr.map(function(value){
//     let res = value *2
//     return res;
// })
// console.log(newArr);
// map: tạo 1 mảng mới từ mảng có sẵn theo 1 công thức

// let newArrFilter = arr.filter(function(value){
//    if(value%2==0){
//        return true;
//    }  

// })
// console.log(newArrFilter);
//filter: lọc thành 1 mảng mới với 1 điều kiện


// let sum = arr.reduce(function(pre, cur){
//     pre += cur;
//     return pre; 
// }, 0)
// console.log(sum);
//reduce: tính toán từ 1 mảng

let profit = [1000, 1500, 2300, 5000]
let newProfit = [];
newProfit = profit.map(function(value){
    return value + value*0.05;
})


for (let value of newProfit) {
    console.log(value);
}
