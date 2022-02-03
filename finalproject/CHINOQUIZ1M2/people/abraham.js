function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['“Whatever you are, be a good one.”',' “Do I not destroy my enemies when I make them my friends”','“My Best Friend is a person who will give me a book I have not read.”','“When I do good, I feel good. When I do bad, I feel bad. Thats my religion.”','“I am a slow walker, but I never walk back.”'];

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