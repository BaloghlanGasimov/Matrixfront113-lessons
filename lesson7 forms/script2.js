const input = document.querySelector(".input");
const button = document.querySelector(".btn");

let randomEded = Math.floor((Math.random() * 10) + 1);

console.log(randomEded);
button.addEventListener("click",function(){
    if(input.value>randomEded){
        alert("Daha kicik eded yazin")
    }
    if(input.value<randomEded){
        alert("Daha boyuyunu yazin")
    }
    
    if(input.value==randomEded){
        alert("Duz tapmisiniz")
    }
    else{
        alert("Sehv tapmisiniz")
    }
})
