let div = document.querySelector('.main');
for(var i =1 ; i<=500 ; i++){
    let box = document.createElement('div');
    box.className = "box";
    div.addEventListener('mousemove',function(){
        box.style.backgroundColor = randomColor();
        box.innerHTML = randomNumer();
    })
    div.append(box);
}
function  randomColor(){
    let randomNumer = Math.floor(Math.random() * 500);
    let randomColor = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = "#";
    for(let i =0; i <6 ; i++){
        let randomNumer = Math.floor(Math.random() * 16);
        color = color + randomColor[randomNumer];
    }
    return color;
}
function randomNumer(){
    return Math.floor(Math.random() * 500);
}
