// made by: mico tongco and chino salansang
(function(){
    var animating = false;
  
    function animatecard(ev) {
      if (animating === false) {
        var t = ev.target;
        if (t.className === 'but-nope') {
          t.parentNode.classList.add('nope');
          animating = true;
          fireCustomEvent('nopecard',
            {
              origin: t,
              container: t.parentNode,
              card: t.parentNode.querySelector('.card')
            }
          );
        }
        if (t.className === 'but-yay') {
          t.parentNode.classList.add('yes');
          animating = true;
          fireCustomEvent('yepcard',
            {
              origin: t,
              container: t.parentNode,
              card: t.parentNode.querySelector('.card')
            }
          );
        }
        if (t.classList.contains('current')) {
          fireCustomEvent('cardchosen',
            {
              container: getContainer(t),
              card: t
            }
          );
        }
      }
    }
  
    function fireCustomEvent(name, payload) {
      var newevent = new CustomEvent(name, {
        detail: payload
      });
      document.body.dispatchEvent(newevent);
    }
  
    function getContainer(elm) {
      var origin = elm.parentNode;
      if (!origin.classList.contains('cardcontainer')){
        origin = origin.parentNode;
      }
      return origin;
    }
  
    function animationdone(ev) {
      animating = false;
      var origin = getContainer(ev.target);
      if (ev.animationName === 'yay') {
        origin.classList.remove('yes');
      }
      if (ev.animationName === 'nope') {
        origin.classList.remove('nope');
      }
      if (origin.classList.contains('list')) {
        if (ev.animationName === 'nope' ||
            ev.animationName === 'yay') {
          origin.querySelector('.current').remove();
          if (!origin.querySelector('.card')) {
            fireCustomEvent('deckempty', {
              origin: origin.querySelector('button'),
              container: origin,
              card: null
            });
          } else {
            origin.querySelector('.card').classList.add('current');
          }
        }
      }
    }
    document.body.addEventListener('animationend', animationdone);
    document.body.addEventListener('webkitAnimationEnd', animationdone);
    document.body.addEventListener('click', animatecard);
    window.addEventListener('DOMContentLoaded', function(){
      document.body.classList.add('tinderesque');
    });
  })();
  
 document.body.addEventListener('nopecard', function(ev) {
   var container = ev.detail.container;
   var label = container.querySelector('.nopes');
   if (label) {
     var nopes = +container.nopes || 0;
     nopes++;
     container.nopes = nopes;
     label.innerHTML = container.nopes;
   }
 });

 document.body.addEventListener('yepcard', function(ev) {
   var container = ev.detail.container;
   var label = container.querySelector('.yays');
   if (label) {
     var yeps = +container.yeps || 0;
     yeps++;
     container.yeps = yeps;
     label.innerHTML = container.yeps;
   }
 });

 document.body.addEventListener('deckempty', function(ev) {
   var container = ev.detail.container;
   var list = container.querySelector('.cardlist');
   var out = '<li class="card current"><img src="/imgs/last-card.png" height="600px" width="400px"></li>';
   list.innerHTML = out;
 });

let heart = document.getElementById('heart');
let cross = document.getElementById('cross');


let currNum = 0;

let animalList = [];
let imglist = [];

let imgFolder = 'imgs/';
let aniImg = ['imgs/1p.jpg','imgs/2p.jpg','imgs/3p.jpg','imgs/4p.jpg','imgs/5p.jpg','imgs/6p.jpg','imgs/7p.jpg','imgs/8p.jpg','imgs/9p.jpg','imgs/10p.jpg'];
let petNames = ['Osman | 24 years old','Bronwen | 20 years old','Luke | 25 years old','Aairaz | 26 years old','Callam | 20 years old','Elisha | 21 years old','Maisey | 23 years old','Leigha | 22 years old','Fabian | 25 years old', 'Nibiha | 23 years old'];

function random () {
    let randNum = Math.floor((Math.random() * aniImg.length));
    pet.src = aniImg[randNum];
    petName.innerHTML = petNames[randNum];
    currNum = randNum;
}

let counter = 0;

cross.onclick =function(){
  if(counter<10){
    petNames.splice(currNum, 1);
    aniImg.splice(currNum, 1);
    random();
    counter+=1;
  }
}

heart.onclick = function() {

    if(counter<10){
        addList(aniImg[currNum],petNames[currNum]);

        petNames.splice(currNum, 1);
        aniImg.splice(currNum, 1);
        random();
        counter+=1;
    }
}

function addList(animalface,animal ){
    var animalface=animalface;
    var animal=animal;

    const lead=document.getElementById('lead');
    const newDiv=document.createElement('div');
    lead.appendChild(newDiv);
    newDiv.classList.add('selected');

    const addedImg=document.createElement('img');
    addedImg.classList.add('list-img');
    addedImg.src=animalface;
    newDiv.appendChild(addedImg);

    const addedAnimal=document.createElement('h3');
    addedAnimal.classList.add('list')
    addedAnimal.innerHTML=animal;
    newDiv.appendChild(addedAnimal);

    const addedLine=document.createElement('hr');
    newDiv.appendChild(addedLine);  
}
