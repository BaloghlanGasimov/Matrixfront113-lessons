const menimnavbarim = document.querySelector(".menimnavbarim");
const modeBtn = document.querySelector(".modeBtn");
// modeBtn.onclick = myfunction;

// menimnavbarim.classList.add("bg-dark navbar-dark");
// menimnavbarim.classList.remove("bg-body-tertiary");

modeBtn.addEventListener("click",function(){

    // menimnavbarim.className = "menimnavbarim navbar navbar-expand-lg bg-dark navbar-dark";

    if(menimnavbarim.className==="menimnavbarim navbar navbar-expand-lg bg-body-tertiary"){
        menimnavbarim.className="menimnavbarim navbar navbar-expand-lg bg-dark navbar-dark"
    }else{
        menimnavbarim.className="menimnavbarim navbar navbar-expand-lg bg-body-tertiary";
    }
})

