let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');
function generteColor(){
    let random = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = "#";
    for(var i=0; i<6;i++){
        let randomColor = Math.floor(Math.random() * 16);
        color = color + random[randomColor];
    }
    return color;
}
function handle(){
    box1.style.backgroundColor = generteColor();
}
function handle2(){
    box2.style.backgroundColor = generteColor();
}
box1.addEventListener('click',handle);
box2.addEventListener('mousemove',handle2);