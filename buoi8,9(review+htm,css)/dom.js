// 3 bước - Vanilajs DOM

// Tìm

// let html = document.getElementsByTagName('h1'); tag name 

// let html1 = document.getElementById('ok');
// console.log(html1);

// Truy xuất
let html = document.getElementsByClassName("mauDo");
console.log(html);
html[0].innerText = "hello heading"
html[0].innerHTML = "<a href='http://google.com'>Google</a>"

for(let i = 0; i < html.length; i++) {
    html[i].style.backgroundColor = "green";
}
// XỬ Lý


//innerText và innerHTML deu reset code html ben trong thanh rong

