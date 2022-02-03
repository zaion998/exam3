  
const submitBtn=document.getElementById('submit-btn');


submitBtn.onclick=function (){

    var ageValue=document.getElementById('age-input').value;
    var weightValue=document.getElementById('weight-input').value;
    var heightValue=document.getElementById('height-input').value;
    var genderValue=document.querySelector('input[name="radio-button"]:checked').value;



    var bmr=findBMR(ageValue,weightValue,heightValue,genderValue);
    console.log(bmr);

    //uses the activity method
    var finalBMR=findActivityBMR(bmr);
    console.log(finalBMR);
    
    let lastBMR=setCookie('bmr',finalBMR,1);
 
}
//finds the bmr
function findBMR(ageValue,weightValue,heightValue,genderValue){
    var bmr;

    if(genderValue=='Male'){
        bmr=(13.397*weightValue) + (4.799*heightValue)-(5.5677*ageValue)+88.362;
    }else if (genderValue=='Female'){
        bmr=(9.247*weightValue) + (3.098*heightValue)-(4.330*ageValue)+447.593;
    }
    return bmr;
}

//activity multiplies the bmr
function findActivityBMR(bmr){
    var finalBMR;
    var activity = document.getElementById("list");
    var activityValue = activity.options[activity.selectedIndex].value;

    if(activityValue=='1'){
        finalBMR=1.2*bmr;
    }else if(activityValue=='2'){
        finalBMR=1.375*bmr;
    }else if(activityValue=='3'){
        finalBMR=1.55*bmr;
    }else if(activityValue=='4'){
        finalBMR=1.725*bmr;
    }else if(activityValue=='5'){
        finalBMR=1.9*bmr;
    }

    return finalBMR;
}

function setCookie(name,value,exp_days) {
    var d = new Date();
    d.setTime(d.getTime() + (exp_days*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

