// function hello(cb){
//     setTimeout(()=>{
//         console.log("hello world");
//         cb();
//     })
// }
// function greet(){
//     console.log("good morning");
// }
// hello(greet);


function hello(cb,ed){
    setTimeout(()=>{
        console.log("hello world");
        cb(ed);
    })
}
function greet(another){

    console.log("good morning");
    another();
}
function display(){
    console.log("bye");
}
hello(greet,display);