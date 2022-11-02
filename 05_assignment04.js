console.log("=========Question 1=============");
var val1=0;
var val2='';
console.log(0=='');

console.log("========================");

var val1=0;
var val2='0';
console.log(0=='0');

console.log("========================");

var val1=0;
var val2=false;
console.log(0==false);

console.log("========================");

var val1=null;
var val2=undefined;
console.log(null==undefined);

console.log("========================");

var val1=1;
var val2=[1];
console.log(1==[1]);

console.log("========================");

var val1=1;
var val2='a';
console.log(1=='1');

console.log("======= Question 2===========");
 var greatestNo=function(val1,val2,val3){
    var result= (val1>val2 && val1>val3) ? `${val1} is greater` 
    : (val2>val1 && val2>val3)  ? `${val2} is greater ` : `${val3} is greater`;
               
    console.log(result);
 }
 greatestNo(20,5,40);
 greatestNo(500,799,45.20);