// var arr = [5, 7, 12, 30, 46, 42];
// var updatedarr = arr.reduce((acc,i)=>acc + i);
// console.log(updatedarr);

var arr = [5, 7, 12, 30, 46, 42];
var updatedarr = arr.filter((i)=>i%2==0).reduce((bs,i) => bs+i);
console.log(updatedarr);