function mul(a){
    return function(b){
    return a*b;
    }
}
var double=mul(2);
var triple=mul(3);
console.log(double(5));
console.log(triple(6));