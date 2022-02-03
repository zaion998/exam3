function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['“Everyone has played video games at some point these days, and video games are fun.”','“We’re all different but we’re all the same. You just be and you don’t let anyone tell you who you are. You don’t need labels to make yourself feel valuable, you’re better than that.”','“Unless you stop trying, how can you not fail anymore.”','“Everyone is entitled to their opinions, even though they’re wrong.”','“Money doesn’t make you happy.”'];

function getRandomNumber(min,max){
    let step1 = max -min + 1;
    let step2 = Math.random() * step1;
    let result =Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click',()=> {
    let index =getRandomNumber(0, quotes.length-1);
    result.innerText = quotes[index];
});