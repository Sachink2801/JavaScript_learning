function details(){
    console.log("Hello friends i am sachin kadam ");
    console.log("i am Mechanical eng ");
    console.log("I am learning JavaScript programming language under Mr.Gajanan Sir");

}
details();

console.log("===============================================================");

function hobby(){
    console.log("I like to play Cricket & Kabaddi ");
    console.log("Also i like to singing ang i win shows as a singer ");
    console.log("in my free time i love to visit natural place and capture some picture ");
}
hobby();

console.log("===============================================================");

function functionDemo(firstName,lastName){
    console.log(firstName + lastName);
}
functionDemo();
console.log("===============================================================");

function swap_value(value1,value2){
    console.log("Before swap===============================");
    console.log(value1,value2);

    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap================================");
    console.log(value1,value2);
}
swap_value("Sanjay","Nita");

console.log("===============================================================");

function swap_value(value1,value2){
    console.log("Before swap================================");
    console.log(value1,value2);
    
    var temp=value1;
    value1=value2;
    value2=temp;
  console.log("After swap=====================================")
    console.log(value1,value2);

}
swap_value(1000,2000);

console.log("===============================================================");

function add_three_number(value1,value2,value3){
    return(value1+value2+value3);

}
console.log("Addition of three no");
var val=add_three_number(10.23,600,40);
console.log(val);

console.log("===============================================================");




