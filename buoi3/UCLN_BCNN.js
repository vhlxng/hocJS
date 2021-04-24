var m=a = prompt('Nhập vào số nguyên a: ');
var n=b = prompt('Nhập vào số nguyên b: ');

if(a==0 || b==0){
    console.log('UCLN của 2 số là '+(parseInt(a)+parseInt(b)));
    console.log('BCNN của 2 số là 0');
}
else{
while(a*b != 0){
    if(a>b){
        a %= b;
    }else{
        b %= a;
    }
    
}
console.log('UCLN của 2 số là '+(a+b));

console.log('BCNN của 2 số là '+((parseInt(m) * parseInt(n))/(a+b)));
}