const modeBtn = document.querySelector(".modeBtn");
const wrapper = document.querySelector(".wrapper");

if(localStorage.getItem("langMode")==undefined){
    localStorage.setItem("langMode","light");
}

if(localStorage.getItem("langMode")=="light"){
    wrapper.className="wrapper light";
}
else if(localStorage.getItem("langMode")=="dark"){
    wrapper.className="wrapper dark";
}

modeBtn.addEventListener("click",function(){

    if(wrapper.className ==="wrapper light"){
        wrapper.className ="wrapper dark";
        localStorage.setItem("langMode","dark");
    }else{
        wrapper.className ="wrapper light";
        localStorage.setItem("langMode","light");
    }

})



var a = 5;

console.log(a);

// console.log(number);


for(let i = 0;i<10;i++){
    console.log("salam");
}

console.log(i);

// var ve const global variable di bu her yerde cagirila bilir
// let local variable di bu her yerde cagirila bilir