const nameInput = document.querySelector(".nameInput");
const passwordInput = document.querySelector(".passwordInput");
const button = document.querySelector(".btn");
const myname = document.querySelector(".name")
const mypassword = document.querySelector(".password")
const deneme = document.querySelector(".deneme");
const errorName = document.querySelector(".errorName");
const errorPassword = document.querySelector(".errorPassword");
const passwordEye = document.querySelector(".passwordEye");
// deneme.textContent = "salam";
// deneme.innerHTML = "necesen"

// deneme.textContent = "<button>Salam</button>"
// deneme.textContent = "<button>Salam</button>"
// deneme.innerHTML = "<button>Salam</button>"

// deneme.innerHTML = "<button>Salam</button>"

// nameInput.value = "necesen";


// function menimfunksiyam (){
//     alert('salam');
// }

// button.onclick = menimfunksiyam;


const ad = "Orxan";
const parol = "1234";

passwordEye.addEventListener("click",function(){
    if(passwordInput.type=="password"){
        passwordInput.type="text";
    }else{
        passwordInput.type="password"
    }
})


button.addEventListener("click",function(){
    
    // if(passwordInput.value.length==0){
    if(passwordInput.value==""){
        // alert("passwordu doldurun")
        errorPassword.textContent="Passwordu doldurun"
    }
    if(nameInput.value.length==0){
        errorName.innerHTML="Name i doldurun"
    }

    if(nameInput.value===ad && passwordInput.value===parol ){
        alert("duzdur")
    }else{
        // alert("sehv yazmisiniz")
        errorName.textContent="Name i sehv yazmisiniz"
        errorPassword.textContent = "Passwordu sehv yazmisiniz"
    }
   

})







