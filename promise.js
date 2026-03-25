let age=25;
var ageCheck = new Promise((res,rej)=>{

    if(age > 18)
        res("eligible to vote")
    else
        rej("not eligible to vote ");
    
})

ageCheck
.then((msg)=>console.log(msg))
.catch((data)=>comnsole.log(data))
.finally(()=>console.log("thank you"))


