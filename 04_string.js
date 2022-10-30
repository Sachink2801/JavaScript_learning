console.log("=================using concat()=========================");
var fname= "SACHIN";
var lname="KADAM";

var result=fname.concat( " ","SANJAY"," ",lname);
console.log(result);

console.log("=================using replace() =========================");//THIS METHOD IS USE TO REPLACE ANY STRING FROM SENTENCE 
var arg="Hello friends Good Morning";
var result=arg.replace("Morning","Evening");
console.log(result);

console.log("=================using indexOf() =========================");//THIS METHOD IS USE TO CONVERT STRING INTO LOWER CASE
var value="I am sachin kadam";
var result=value.indexOf("kadam");
console.log(result);

console.log("=================using toUpperCase() =========================");//THIS METHOD IS USE TO CONVERT STRING INTO UPPER CASE
var str="heyy i am busy right now. "
var result=str.toUpperCase(str);
console.log(result);

console.log("=================using toLowerCase() =========================");//THIS METHOD IS USE TO CONVERT STRING INTO LOWER CASE
var small=" HEYY I AM BUSY RIGHT NOW";
var result=small.toLowerCase(small);
console.log(result);

console.log("=================using substring() =========================");//THESE METHOD IS SAME AS SLICE() 
var str="Music is my life";
var result=str.substring(0,5);
console.log(result);

console.log("=================using slice() =========================");
var demo_slice="Music is my life"
var result=demo_slice.slice(8);
console.log(result);

console.log("=================using split()=========================");
var demo_split="sachin ,Ram, Shyam, Sita";
var split_result=demo_split.split(",");
console.log(split_result);

console.log("=================using trim() =========================");//THIS METHOD IS USE TO REMOVE SPACE
var demo_trim="                         Jai Ho                                    ";
console.log(demo_trim.length);
var result=demo_trim.trim();
console.log(result.length);

console.log("=================using includes()========================="); //IT IS USE TO CHECK STRING IS PRESENT OR NOT 
var str="Good Morning Mumbai";
console.log(str.includes("Good"));
console.log(str.includes("PUNE"));
console.log(str.includes("GOOD"));

console.log("=================using ` ` =========================");
console.log(`"do or dai" situation for me.`);
var hname="RAM";
var wname="SITA";

var result=console.log(`Husband_name :${hname} & Wife_name : ${wname} `);

