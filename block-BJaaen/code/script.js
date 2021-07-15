let usertext = document.querySelector('.user-count');
let computertext = document.querySelector('.computer-count');
let usericon = document.querySelectorAll('.user-icon');
let computericon = document.querySelectorAll('.icon');
let ptext = document.querySelector('p');
let count = 0;
let computercount = 0;
let arr = ['rock','paper','scissors',];
usericon.forEach((elem) => {
    elem.addEventListener('click',handler);
});
function handler(event){
    console.log(event);
    usertext.innerText = event.target.id;
    computertext.innerText = arr[Math.floor(Math.random() * 3)];
    if(usertext.innerText === "rock" && computertext.innerText !== "paper"){
        ptext.innerText = "You won"
         count += 1;
    }else if(usertext.innerText === computertext.innerText){
        ptext.innerText = "Tie"
    }else if(usertext.innerText === "scissors" && computertext.innerText !== "rock"){
        ptext.innerText = "You won"
         count += 1;
    }else if(usertext.innerText === "paper" && computertext.innerText !== "scissors"){
        ptext.innerText = "You won"
        count += 1;
    }else if(usertext.innerText !== "rock" && computertext.innerText === "scissors"){
        ptext.innerText = "You lose"
        computercount += 1;
    }else if(usertext.innerText !== "paper" && computertext.innerText === "rock"){
        ptext.innerText = "You lose"
        computercount += 1;
    }else if(usertext.innerText !== "scisoors" && computertext.innerText === "paper"){
        ptext.innerText = "You lose"
        computercount += 1;
    }
}
