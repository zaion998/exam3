function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['"I have decided to stick to love...Hate is too great a burden to bear."','"Our lives begin to end the day we become silent about things that matter."','"Our lives begin to end the day we become silent about things that matter."','"Faith is taking the first step even when you cant see the whole staircase"','"If you cant fly then run, if you cant run then walk, if you cant walk then crawl, but whatever you do you have to keep moving forward."'];

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