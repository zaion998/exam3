const quote = document.querySelector("#quote");
const anime = document.querySelector("#anime");
const character = document.querySelector("#character");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getWord);

function getWord(){
fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.quote;
        anime.innerHTML = data.anime;
        character.innerHTML = data.character;
})
}
