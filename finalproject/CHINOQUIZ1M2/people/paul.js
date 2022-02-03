function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['"I’m one of those people that think certain things happen at certain times for all the right reasons."','"I learned a long time ago that if you subscribe and believe the good, you have to believe the bad. My measure is my heart and what I know."','"The dream is to have it all. Who says you can’t have your cake and eat it too? Live this life, that life, this life, you know? You only live one time — I want to get it all in."','"Sometimes the hurdles aren’t really hurdles at all. They’re welcome challenges, tests."','"You know, all that really matters is that the people you love are happy and healthy. Everything else is just sprinkles on the sundae."'];

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