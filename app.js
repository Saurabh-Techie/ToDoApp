const input = document.querySelector('#input');
const add = document.querySelector('#add');
const list  = document.querySelector('#UL');

add.addEventListener("click",()=>{
    const li = document.createElement('li');
    li.id = "LI";
    list.appendChild(li)
    const span = document.createElement('span')
    span.innerHTML="X"
    span.id = SPAN
    const text = document.createTextNode(input.value);
    li.appendChild(text)
    li.appendChild(span)
    
})