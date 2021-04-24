// for(khai bao biến; điều kiện dừng; biểu thức)

for(var i=0; i <= 5;i++){
    console.log(i); //state
}


var sum = 0;
for(var i=1; i<=100; i++){
    if(i % 2 != 0){
        sum +=i ;
    }
    
}
console.log(sum); 

var giaithua = 1;
for(var i=1; i<=3; i++){
    giaithua *= i
}
console.log(giaithua);

// while(điều kiện){}


// var num = 1235;
// while(num!=0){
//     console.log(num % 10);
//     num = parseInt(num/10)
// }

// var tinh=1;
// while(tinh<1000){
//     tinh = tinh * 2
//     if(tinh * 2 > 1000){
//         break;
//     } 
// }
// console.log(tinh);  


// for(var i = 1; i<=100; i++){
//     if(i%2==0){
        
//         continue
//     }console.log(i);
// }
//break, dừng
//continue, bỏ qua, chạy tiếp

for(var i = 1; i<5; i++){
    for(var j=0;j<4;j++){
        console.log(j);
    }
}
// 2 vòng for lồng nhau, bên ngoài chạy 1 lần, bên trong chạy hết.

//Mảng: có thể lưu tất cả gtri và kiểu của nó, đánh dấu stt từ 0


// btvn tìm BCNN và UCLN của 2 số