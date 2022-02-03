function returnHome(){
    location.replace("../main/main.html")
}

let btnRandom = document.querySelector('button');
let result =document.querySelector('p');

let quotes =['"The greatest glory in living lies not in never falling, but in rising every time we fall."','"Education is the most powerful weapon which you can use to change the world"','"It is in your hands, to make a better world for all who live in it."','"A winner is a dreamer who never gives up."','"Overcoming poverty is not a task of charity, it is an act of justice."'];

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