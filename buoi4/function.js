// function: tenFunction(){}
function max(){
    if(a>b && a>c){
        console.log('max = ',a);
    }else if(b>a && b>c){
        console.log('max = ',b);
    }else{
        console.log('max = ',c);
    }
}
//gọi hàm: 
max();

function hello(name) {
    console.log('xin chao',name);
}
hello('long')
hello('hieu')
hello('minh') //truyền 1 tham số(param)

// params: 1 tham số truyền vào khi chạy hàm
// truyền nhiều params: 
function info(name, address, sdt) {
    console.log(name,address,sdt);
}
info('long','hai duong',696)

// function scopes: các biến bên trong không dùng được ở bên ngoài.
// !=closure

// Hoisting: tất cả các biến dc khai báo(trong scope,..) đưa lên đầu, nhưng chưa gán giá trị --> sử dụng let thay var

function add(a, b) {
    let c = a+b;
    return c; // trả về giá trị
}
console.log(add(5,6));

let total = add(5,6);
console.log(total);
// khi return ở đâu thì chương trình sẽ dừng ngay lập tức
//return undefined = return;