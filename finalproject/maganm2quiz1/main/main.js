function goToNelson() {
    location.replace("../people/nelson.html")
}
function goToWalt() {
    location.replace("../people/walt.html")
}
function goToSteve() {
    location.replace("../people/steve.html")
}
function goToElean() {
    location.replace("../people/Elean.html")
}
function goToOprah() {
    location.replace("../people/oprah.html")
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}