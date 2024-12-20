let section = document.querySelector('section');

let tanlangan = JSON.parse(localStorage.getItem("word"))
for (let i = 0; i < tanlangan.length; i++) {
    console.log(tanlangan[i])
    let box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = `
    <p class="title-uzb">${tanlangan[i]['name-uzb']}</p>
    <img src="photos/${tanlangan[i]['img']}" alt="" class="image">
    <input type="text" class="res_int">
    `;
    section.appendChild(box);
   
}

let inp = document.querySelectorAll('.res_int');
inp.forEach((item, index)=>{
    item.onclick = ()=> {
        if(item.value == tanlangan[index]['name-eng']) {
            item.style.border = '2px solid yellowgreen'
        }
        else {
            item.style.border = '2px solid red'
        }
    }
})
