const button = document.querySelector(".container button");
const quote = document.querySelector(".container p");


btn.addEventListener('click', getWord);

function getWord(){
  fetch('https://animechan.vercel.app/api/random')
    .then(res => res.json())
    .then(data => { 
      quote.innerHTML = data.quote;
      anime.innerHTML = data.anime;
      character.innerHTML = data.character;

})
}
