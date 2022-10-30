function square(arg1){
    console.log("square of 5 is",arg1*arg1)
    console.log("type of function is",typeof square);
   // var result =console.log(5*5);
}
square(5);

console.log("========================================================");

var square2 =function(arg1){
     console.log("square of 6 is",arg1*arg1);
}
square2(6);

console.log("=========================================================");

var square3=function(arg1){
    console.log("square of 25 is",arg1*arg1);
}
square3(25);

console.log("=========================================================");

var square4 = function(arg1){
    console.log("square of 100 is ",arg1*arg1);
}
square4(100);

console.log("=========================================================");

var exp1=function(arg1){
    
}
console.log("Type of function is",typeof exp1);

console.log("=========================================================");
 var triangle=function(base,height){
     console.log("area of Triangle for consider base=45 & height=34 is= ",(base*height)/2);
 }
 triangle(45,34);

 console.log("=========================================================");
 var rectangle=function(length,width){
    console.log("Area of rectangle for length=500 & width=250 is=",length*width);
 }
rectangle(500,250);

console.log("=========================================================");
 
console.log("Example of swapping using function expression");

var swap_value=function(arg1,arg2){
    console.log("Before swap");
    console.log(arg1,arg2);
    console.log("After swap");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
swap_value("kadam","sachin");
swap_value(20,30);


console.log("=========================================================")

console.log("string operation");
var str="Gajanan sir is best sir";
console.log(str);
console.log("Total no of character available in the string is",str.length);
console.log("index of s is:",str.indexOf('s'));
console.log("index of best is",str.indexOf('best'));

var str1=str.charAt(str.length-1);             // last word of string using charAt()
console.log("last character in string is",str1);

var str2=str.charAt(str.length-3);
console.log("3rd last char in string is",str2);


console.log("=========================================================");













