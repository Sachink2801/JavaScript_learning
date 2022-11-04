var s=() =>{
    console.warn("4 th November assignment of: sachin kadam");
}
s();

console.warn("=======Arrow function with no argument and return value ======");
 var display=() =>{
    console.log("Good Morning,TOday is Friday");
 }
 display();

 console.warn("=====Arrow Function with three argument and no return value=====");

 var multiplication = (a,b,c=5) =>{
    var d=a*b*c;
    console.log(`Multiplication of ${a},${b} and ${c} is ${d}`);
 }
 multiplication(5,2,3,);
 multiplication(10,4);

 console.warn("====Arrow Function with Five argument and return function===");

 var addition =(a,b,c,d,e) => {
       return a+b+c+d+e;

 }
 var result=addition(100,100,200,349,756);
 var res=addition("I am "," learning "," ES6 "," Feature "," in depth ");
 console.log(res);
 console.log(`Addition of number 100,100,200,349 and 756 is : ${result} and ${res}`);


