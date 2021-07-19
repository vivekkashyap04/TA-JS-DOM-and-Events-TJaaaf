let input = document.querySelector('input');
let ul = document.querySelector('ul');
function time(){
    let date = new Date();
    let time = date.getHours( )+ ":" +  date.getMinutes() + ":" +  date.getSeconds();
    document.getElementById('ct').innerHTML = time;
    setTimeout('time()',1000);
}


function handler(event){
    if(event.target.value !== ""){
        ul.innerHTML = " ";
        let filterdata =  data.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()));
        createUI(filterdata);
    }
    else{
        createUI(data);
    }
}

input.addEventListener('keyup',handler);
function createUI(data){
    data.forEach(element => {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        h2.innerHTML = `<span>Method Name:</span> ${element.name}`;
        let p = document.createElement('p');
        p.innerHTML = `<span>Description:</span> ${element.desc}`;
        li.append(h2,p);
        ul.append(li);
    });
}

time();
createUI(data);