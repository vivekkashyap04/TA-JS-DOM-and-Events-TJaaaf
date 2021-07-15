let input = document.querySelector('input');
let ul = document.querySelector('ul');


function handler(event){
    console.log(event);
    if(event.target.value !== "" && event.keyCode === 13){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "check";
    span.innerText = "delete";
    span.className = "span"
    span.addEventListener('click', () => {
            li.innerHTML = "";
            li.classList.remove('li');
    })
    li.innerText = event.target.value;
    li.classList.add('li');
    li.append(checkbox,span);
    ul.append(li);
    event.target.value = "";
    }
   
}

input.addEventListener('keyup',handler);