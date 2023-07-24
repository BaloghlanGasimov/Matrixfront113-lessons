const button = document.querySelector('button');
const dropdown = document.querySelector('.menimdropdown')
const esas = document.querySelector('.esas')
window.onscroll = function() {myFunction()};

function myFunction(){
    if (document.documentElement.scrollTop > 10) {
        button.className="goyreng";
    }
    else{
        button.className=""
    }
}

dropdown.addEventListener("click",function(){
    if(esas.className=="esas"){
        esas.className="esas show"
    }else{
        esas.className="esas"
    }
})