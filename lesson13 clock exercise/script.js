const eqreb = document.querySelector(".eqreb");

var second =0;

second =new Date().getSeconds();

console.log(second);

eqreb.style.transform = `rotate(${second*6}deg)`

const secondFunc = ()=>{
    if(value>=360){
        value=0;
        
    }
    var value =second*0.1;

    eqreb.style.transform = `rotate(${value}deg)`
    second+=1;
    // console.log("menim qiymetim: "+ value);
    
}

setInterval(secondFunc,10)
// secondFunc();
