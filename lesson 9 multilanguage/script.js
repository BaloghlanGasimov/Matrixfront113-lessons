import {diller} from "./langData.js"

const navLink = document.querySelectorAll(".nav-link");
const langBtn = document.querySelector(".langBtn");


if(localStorage.getItem("lang")==undefined){
    localStorage.setItem("lang","en");
}

if(localStorage.getItem("lang")=="az"){
    for(let i=0;i<5;i++){
        navLink[i].textContent=diller.az[i];
    }
}
else if(localStorage.getItem("lang")=="en"){
    for(let i=0;i<5;i++){
        navLink[i].textContent=diller.en[i];
    }
}




langBtn.addEventListener("click",function(){
    // for(let i=0;i<5;i++){
    //     navLink[i].textContent=diller.az[i];
    // }       

    if(langBtn.textContent=="AZ"){
        for(let i=0;i<5;i++){
            navLink[i].textContent=diller.az[i];
        } 
        localStorage.setItem("lang","az");

        langBtn.textContent="EN";
    }
    else{
        for(let i=0;i<5;i++){
            navLink[i].textContent=diller.en[i];
        }
        localStorage.setItem("lang","en");

        langBtn.textContent="AZ";
    }

})