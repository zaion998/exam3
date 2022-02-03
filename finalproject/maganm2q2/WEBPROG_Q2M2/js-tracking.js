var bmr=getCookie('bmr');
console.log('this is the bmr')
console.log(bmr);

var finalBMR=document.getElementById('calorie-left');
finalBMR.innerHTML=bmr;

var screenButton=document.getElementById('screen-btn');


screenButton.onclick=function(){
    var food=document.getElementById('food-input');
    var calorie=document.getElementById('calories-input').value;
    minusCalorie(calorie,bmr);
}

function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function minusCalorie(calorie,totalCalorie){
    var result=totalCalorie-calorie;
    finalBMR.innerHTML=result;
    bmr=result;

    
}

