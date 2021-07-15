let form = document.querySelector('form');
let error = document.querySelector('small');
let userError = "";


function nameValidation(name){
   return name.split('').some(ele => Number(ele));
}
function emailvalidation(email){
    return email.split('').includes('@');
}
function mobileValidation(num){
    return num.split('').every(ele => Number(ele));
}

function handle(event){
    event.preventDefault();
    let userInput = event.target.elements;
    if(userInput.username.value.length < 5){
        userError = "username can't be less than 4 character";
        console.log(userError);
        userInput.username.nextElementSibling.innerText = userError;
    }
    if(nameValidation(userInput.name.value)){
        userError = "You can't use number in the name field";
        console.log(userError);
        userInput.name.nextElementSibling.innerText = userError;
    }
    if(!emailvalidation(userInput.email.value )){
        userError = " Not a valid email";
        userInput.email.nextElementSibling.innerText = userError;
    }
    if(!mobileValidation(userInput.phone.value)){
        userError = "Phone number can only contain numbers";
        console.log(userError);
        userInput.phone.nextElementSibling.innerText = userError;
    }
    if(userInput.password.value !== userInput.confirmpwd.value){
        userError = "Password are not matching";
        userInput.confirmpwd.nextElementSibling.innerText = userError;
    }else{
        userError = "";
        alert("User Added Successfully!")
    }
    console.log(event);
}
form.addEventListener('submit',handle);