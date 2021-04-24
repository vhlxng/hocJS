//khai bao object
//cặp key: value
let co = {
    mauSac : ['black','blue'],
    tuoi : 1,
    isFly : true,
    speak : function(){
        console.log('quack');
        return 'keuj';
    },
    
    introduce: function(){
        console.log('co nhieu mau', this.mauSac.join('+'))
}
}

for(const keyCo in co){
    if(typeof co[keyCo] == 'function'){
        console.log(keyCo, co[keyCo]());
    }else{
        console.log(keyCo, co[keyCo]);
    }
}


let arr = {
    value : [4,5,6],
    length : 3,
    indexOf : function(gt){
        for (let i=0;i<this.value.length;i++){
            if(this.value[i] === gt){
                return i;
            }
        }
        return -1;
    },
}
console.log(arr.indexOf(2));

//reference type vs primitive type