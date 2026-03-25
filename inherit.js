class person{
    constructor(fullname,address,age){
        this.fullname=fullname;
        this.address=address;
        this.age=age;
    }
    displaydetails(){
        console.log(`name:${this.fullname} from ${this.address} and ${this.age} years old`);

    }
}
class trainer extends person{
    constructor(fullname,address,age){
        super(fullname,address,age);
    }
    displaydetails(){
        super.displaydetails();
        console.log("iam the trainer for fullstack program");
    }
}

var t1 = new trainer("sindhu","ongole,andhrapradesh",21);
    t1.displaydetails();

