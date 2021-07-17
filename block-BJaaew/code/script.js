let ul = document.querySelector('ul');
let input = document.querySelector('input');
let fillterBtn = document.querySelector('.btn');
 function createUI(data){
 data.forEach(item => {
    item.people.forEach(item => {
        let li = document.createElement('li');
     let img = document.createElement('img');
     img.src = item.image;
    let h2 = document.createElement('h2');
    h2.innerText = item.name;
    let p = document.createElement('p');
    p.innerText = item.description;
   let btn = document.createElement('button');
   btn.innerText = "Learn More";
   li.append(img,h2,p,btn);
    ul.append(li);
     })
 })
 }

    got.houses.forEach(item => {
        let btn = document.createElement('button');
        btn.innerText = item.name;
        fillterBtn.append(btn);
    })

    function createUI2(item){
        item.forEach(elem=>{
            let li = document.createElement('li');
             let img = document.createElement('img');
             img.src = elem.image;
            let h2 = document.createElement('h2');
            h2.innerText = elem.name;
            let p = document.createElement('p');
            p.innerText = elem.description;
            let btn = document.createElement('button');
            btn.innerText = "Learn More";
            li.append(img,h2,p);
            ul.append(li);
        })
                
        }





function searchGot(event){
    console.log(event.target.value);
    ul.innerHTML = "";
    let newArray=[];
    got.houses.forEach((elem)=>elem.people.forEach((element)=>newArray.push(element)));
    let some = newArray.filter((elem)=>elem.name.toLowerCase().includes(event.target.value.toLowerCase()))
    createUI2(some); 
}  

function handler(event){
    ul.innerHTML = "";
    console.log(event.target.innerText);
    let arr = got.houses.filter(item => event.target.innerText === item.name);
    console.log(arr);
    createUI(arr);     
}

fillterBtn.addEventListener('click',handler);

input.addEventListener('keyup',searchGot)
createUI(got.houses);