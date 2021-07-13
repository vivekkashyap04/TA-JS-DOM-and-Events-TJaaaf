let ul = document.querySelector('.boxes');
for(var i= 1; i<=12;i++){
    let li = document.createElement('li');
    li.classList.add('box');
    li.innerText = i;
    li.addEventListener('click',function(){
        setTimeout(function(){
            li.innerText = '';
        },5000);
    })
    ul.append(li);
}

let eventul = document.querySelector('.boxes1');
function handler(event){
    
}


eventul.addEventListener('click',handler);