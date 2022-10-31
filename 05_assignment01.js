var compareOperator = function(arg1,arg2){
   var result= arg1>arg2 ? arg1 : arg2;
   console.log(`Greatest number among two number ${arg1},${arg2} that is : ${result}`);

}
compareOperator(10,-10);
compareOperator(800,899);

console.log("=================================================================================");

var evenodd=function(arg1){

    var result=(arg1%2==0) ? true : false;
    console.log(`Given number ${arg1}:${result}`);
}

evenodd(29);
evenodd(44);
evenodd(0);
evenodd(101);

console.log("==================================================================================");

var evenOddStr= function(arg1){
    var len=arg1.length;
    var str=(len%2==0) ? "Even" : "Odd"
    console.log(`Word ${arg1} length is : ${str}`);
}
evenOddStr("JavaScript");
evenOddStr("developer");
evenOddStr("Google");
