let form = document.querySelector('form');
let modal = document.querySelector('.modal');
let close = document.querySelector('.left');
let userInfo = {};
function handler(event){
     event.preventDefault();
     console.log(event);
     userInfo.name = form.elements.text.value;
     userInfo.email = form.elements.email.value;
     userInfo.gender = form.elements.gender.value;
     userInfo.color = form.elements.color.value;
     userInfo.rating = form.elements.rating.value;
     userInfo.book = form.elements.drone.value;
     userInfo.terms = form.elements.terms.checked;
     console.log(userInfo);
     let h1 = document.createElement('h1');
     let h2 = document.createElement('h2');
     let movies = document.createElement('h2');
     let color = document.createElement('h2');
     let rating = document.createElement('h2');
     let book = document.createElement('h2');
     let condition = document.createElement('h2');
     modal.classList.add('main');
     h1.innerText = `Hello ${userInfo.name}`;
     h2.innerText = `Email : ${userInfo.email}`;
     movies.innerText = `You Love: ${userInfo.gender}`;
     color.innerText = `Color: ${userInfo.color}`;
     rating.innerText = `Rataing : ${userInfo.rating}`;
     book.innerText = `Book Genre: ${userInfo.book}`;
     if(userInfo.terms === true){
         condition.innerText = "You agree to terms and condition"
     }else{
        condition.innerText = "You do not agree to terms and condition"
     }
     close.innerText = "close";
     modal.append(h1,h2,movies,color,rating,book,condition);
}
form.addEventListener('submit',handler);
close.addEventListener('click',() => {
       modal.innerText = " ";
       modal.classList.remove('main');
})