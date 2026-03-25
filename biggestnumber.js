var a = 10;
var b = 13;
var c = 7;
// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b)
// }
// else{
//     console.log(c);
// }

if(a>b){
    if(a>c){
        console.log(a);
    }
    else{
        console.log(c);
    }
}
else{
    if(b>a){
        console.log(b);
    }
    else{
        console.log(c);
    }
    
}