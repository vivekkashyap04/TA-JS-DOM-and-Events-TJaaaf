function main(){
let input = document.querySelector('#text');
let ul = document.querySelector('ul');

let arr = JSON.parse(localStorage.getItem('list')) || [] ;

function handler(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== ""){
        let todo = {
            name:value,
            isDone:false
        }
        arr.push(todo);
        event.target.value = "";
        createUi(arr,ul);
        localStorage.setItem('list',JSON.stringify(arr));
    }
}

function toggleCheckbox(event){
    let id = event.target.dataset.id;
    arr[id].isDone  = !arr[id].isDone;
    localStorage.setItem('list',JSON.stringify(arr));
    createUi(arr,ul);
}

function deleteList(event){
    let id = event.target.dataset.id;
    arr.splice(id,1);
    localStorage.setItem('list',JSON.stringify(arr));
    createUi(arr,ul);
}
function createUi(data,eleUl){
    eleUl.innerHTML = "";
    data.forEach((item,index) => {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = item.isDone;
        checkbox.setAttribute('data-id',index);
        checkbox.addEventListener('change',toggleCheckbox);
        let p = document.createElement('p');
        p.innerText = item.name;
        let span = document.createElement('span');
        span.innerText = "X";
        span.setAttribute("data-id",index);
        span.addEventListener('click',deleteList);
        li.append(checkbox,p,span);
        eleUl.append(li);

    })
}

    let all = document.querySelector('.all');
    all.addEventListener('click',filterAll);
    let active =document.querySelector('.active');
    active.addEventListener('click',activeAll);
    let complete = document.querySelector('.completed');
    complete.addEventListener('click',completed);

function filterAll(){
    createUi(arr,ul);
}

function activeAll(){
    let arr1 = arr.filter(item => item.isDone === false);
    createUi(arr1,ul);
}

function completed(){
   let arr1 = arr.filter(item => item.isDone === true);
    createUi(arr1,ul);
}

createUi(arr,ul);

input.addEventListener('keyup',handler);
}
main();