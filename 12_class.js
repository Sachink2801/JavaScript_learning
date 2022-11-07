
class Person{
    fullName;

    constructor(myname,mycity,myage,mygender){
        this.fullName=myname;
        this.City=mycity;
        this.age=myage;
        this.gender=mygender;


    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.City}  ${this.age}  ${this.gender}`);
    }


}
let Sachin= new Person("Sachin Sanjay Kadam","Mumbai",23,"Male");
console.log(Sachin);
console.log(Sachin instanceof Person);
console.log(Sachin.fullName);
// console.log(Sachin.state="MH");
Sachin.details();