let list = document.querySelectorAll('.first li');
list.forEach((elem,index) =>
{
    elem.addEventListener('click',(event) => {
        event.target.innerText =index + 1;
        setTimeout(function(){
            event.target.innerText = '';
        },5000);
    })
})

let eventul = document.querySelector('.second');
let li = document.querySelectorAll('.second li');
li.forEach((elem,index) => {
    elem.setAttribute('data-text',index);
})
function handler(event){
    let target = event.target.dataset.text;
    event.target.innerText = Number(target) + 1;
    setTimeout(function(){
        event.target.innerText = '';
    },5000);
}


eventul.addEventListener('click',handler);