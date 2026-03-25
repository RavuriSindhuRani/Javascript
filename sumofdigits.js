var  num = 1234567;
var sum = 0;
var digit;
while(num > 0){
    digit = num % 10;
    sum += digit;
    num = parseInt(num / 10);
}
console.log("sum of digits of a number is "+ sum)