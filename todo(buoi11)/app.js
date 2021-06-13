let lists = document.getElementsByTagName('li')
let fm = document.getElementById('fm');
let ulTodo = document.getElementById('ulTodo');
let btnDel = document.getElementsByClassName('del')


// lưu dữ liệu vào trong Array[];


// khởi tạo các li đã có sẵn sau đó thêm sự kiện click
for(let i = 0; i < lists.length; i++){
    lists[i].addEventListener("click",function(e){
    if(e.target.style.textDecoration == "line-through"){
        e.target.style.textDecoration = "none";
        return;
    }
    e.target.style.textDecoration = 'line-through'
})
}
//add sự kiện 
for(let i=0; i< btnDel.length; i++){
    btnDel[i].addEventListener('click',function(e) {
        e.target.parentNode.remove();
    })
}
//sự kiện chỉ dành cho form
fm.addEventListener('submit',function(e){
    e.preventDefault();

    // truy cập tới input có name là dl
    if(fm.dl.value.trim() === ""){
        return;
    }
//Khởi tạo cặp thẻ <li></li>
    let li = document.createElement("li");
    //thêm dữ liệu text vào <li>
    li.innerText = fm.dl.value.trim();
    //thêm sự kiện click vào thẻ li
    li.addEventListener("click",function(e){
        if(e.target.style.textDecoration == "line-through"){
            e.target.style.textDecoration = "none";
            return;
        }
        e.target.style.textDecoration = 'line-through'
    });
    let btn = document.createElement('button');
    btn.classList.add('del');
    //btn.className = 'del';
    btn.innerText = 'X';
    btn.addEventListener('click',function(e) {
        e.target.parentNode.remove();
    })
    li.appendChild(btn);
    //thêm thẻ <li> vào cuối ul#ulTodo
    ulTodo.appendChild(li);
    fm.dl.value = '';
})

async function fecthData() {
    // bước 1 : gọi đến backend restful api url
    let res = await fetch("https://news-ncov-api.herokuapp.com/news?_page=1")

    // response lấy ra json
    let data = await res.json();
    let html = "";
    data.forEach(function(e){
        html += `<li>${e.title}</li>`
    });
    console.log(html);
    ulTodo.innerHTML = html;
}



