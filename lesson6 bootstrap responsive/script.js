
// console.log(arr[0]+arr[1]);
// console.log(1+2);

// console.log(arr.length);

a= 3;
console.log("A nin qiymeti: "+ (++a))
console.log("Yeniden A nin qiymeti: "+ (a));

var i;


// for(i=0;i<8;i++){
//     if(i==4){
//         continue;
//     }
//     console.log("funksiya isleyir" + i);
// }
console.log(arr);

var arr = [3,7,2,9,4,7]

var temp =0;

temp = arr[0];

arr[1];
        
for(i=1;i<arr.length;i++){

    //1-ci dovrde temp 3 du
    // arr[i] 7
    //    3<7

    //2 ci dovrde temp 7
    // arr[i] 2 di
    //    7<2

    //3cu dovrde temp 7
    //arr[i] 9du
    //    7<9

    //4cu dovrde temp 9
    //arr[i] 4 du
    //    9<4

    //5ci dovrde temp 9
    //arr[i] 7
    //    9<7
    if(temp<arr[i]){
        //3 bunu deyisir eliyir 7
        temp = arr[i];
        //temp=7;

        //temp =9;
    }

}

//temp 9 du

console.log("Arrayin Max elementi : "+ temp);


const menimarrayim = [1,3,5,7,9,11,12,13,14];

// menimarrayim[5];

                    
console.log("Sonuncu element: "+ menimarrayim[menimarrayim.length-4]);
