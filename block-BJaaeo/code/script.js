let input = document.querySelector('.display');
let div = document.querySelector('div');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let count = 0;
div.addEventListener('click',handler);
function handler(){
    console.log(event.target.value);
    count = count + event.target.value;
    input.value = count;
    return count;
}
clear.addEventListener('click',() => {
    input.value = 0;
    count = 0;
})
equal.addEventListener('click',() => {
    input.value = eval(count);
})