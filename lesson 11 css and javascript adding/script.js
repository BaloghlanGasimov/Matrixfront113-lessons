
window.onscroll = function() {myFunction()};

const mynavbar = document.querySelector(".mynavbar")
const navbarBtn = document.querySelector(".navbarBtn")
const test = document.querySelector(".test");
function myFunction(){
    if (document.documentElement.scrollTop > 180) {
        mynavbar.className="mynavbar fix menimAnimasiyam"
    }
    else{
        mynavbar.className="mynavbar"
    }
}

navbarBtn.addEventListener("click",function(){
    test.className="test d-block"
})

