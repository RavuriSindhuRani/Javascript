var num = 153;
var sum=0;
var temp=num;
var digits=0;
var count=0;
while(num > 0){
    num = parseInt(num/10);
    count++;
}
temp = num;

while(temp > 0){
    digits = temp % 10;
    sum = sum+ digits ** count;
    temp =parseInt(temp /10);
}
console.log(temp==sum ? "given number is armstrong" : "given number is not armstrong")