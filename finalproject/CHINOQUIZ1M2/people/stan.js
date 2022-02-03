function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['“With great power comes great responsibility.”','Your humans slaughter each other because of the color of your skin, or your faith or your plitics -- or for no reason at all -- too many of you hate as easily as you draw breath. - Magneto”','"You know, I guess one person can make a difference. Nuff said...”','“The pleasure of reading a story and wondering what will come next for the hero is a pleasure that has lasted for centuries and, I think, will always be with us.”','“Forced idleness is a terrible thing.”'];

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