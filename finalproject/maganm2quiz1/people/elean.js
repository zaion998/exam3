function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['"If life were predictable it would cease to be life, and be without flavor."','"No one can make you feel inferior without your consent"','"Do one thing every day that scares you"','" Do what you feel in your heart to be right – for youll be criticized anyway. "','"The future belongs to those who believe in the beauty of their dreams."'];

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