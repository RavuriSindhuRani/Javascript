var num = 100;
isPrime = true;
for(let i=2; i <=Math.sqrt(num); i++){
    if(num % i == 0){
        isPrime = false;
        break;
}}
if(num <= 1){
    console.log( num + "not prime")
}
else{
    console.log(num + " prime")
}
