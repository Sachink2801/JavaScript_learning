var wordLengthSquare = function(arg1){
   var wordLengthSquare= arg1.length;
   var square= wordLengthSquare * wordLengthSquare ;
   console.log(`Length of ${arg1} is: ${wordLengthSquare} and square is : ${square}`);
}
wordLengthSquare("JavaScript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

console.log("==============================================================================");

function stringOperation(){
    var string1="I am angular developer";
    console.log(`Given string is ${string1}`);

    var stringLen=string1.length;
    console.log(`Total string Length is :${stringLen}`);

    var spilt1=string1.split(" ");
    console.log(spilt1);

    var totalWords=spilt1.length;
    console.log(`Total no of word in string is : ${totalWords}`);

    var total=stringLen/totalWords;
    console.log(`Result after dividing length of string with total number of word in string is :${total} `);

    return string1.split(" ").reverse().join(" ");


}
 var string2 =console.log(`Reverse string is: ${stringOperation()}`);