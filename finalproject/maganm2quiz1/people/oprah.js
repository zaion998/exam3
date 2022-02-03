function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['“f you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.  ”','“Passion is energy”','"The greatest discovery of all time is that a person can change his future by merely changing his attitude”','“Be thankful for what you have”','“What I know for sure is that if you want success, you cant make success your goal.”'];

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