console.log("sum of number from 1 to 10 using function exp");
var sumNum=function(){
  var count=0;
  for (let index = 0; index <=10; index++) {
    count=count+index;

  }
  console.log(`Sum of number 1-10 is:${count}`);
}
sumNum();

console.log("WAP to get sum of square of 1-5 number");

function sumOfSquare(){
  var sum=0;
  for (let index = 1; index <=5; index++) {


    sum=sum+(index*index);

  }console.log(sum);
}
sumOfSquare();
