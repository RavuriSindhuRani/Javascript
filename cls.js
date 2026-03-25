class display{
    constructor(greet){
        this.greet=greet;
    }
    greetnow(){
        console.log(`hello ${this.greet}`);
    }
    static wish(){
        console.log("good morning");
    }
}
var p1 = new display("sindhu");
p1.greetnow();
display.wish();