console.log("====Check you are Eligible for voting or not====");

var eligibleVote = function(person_name,age){
   if(age>18){
    console.log(`Hey ${person_name} you are eligible for voting `);
   }
   else{
    console.log(`Hey ${person_name} you are not eligible for voting `);
   }

}
eligibleVote("Sachin",45);
eligibleVote("Sanjay",17);
eligibleVote("Sonali",20);
eligibleVote("Nita",8);


console.log("====Check gender of given input ====");

var eligibleMarriageBoy =function(gender,name,age){
    if(age>18 && gender=="Male"){
        console.log(`${name} You are Eligible for Marriage`);
    }else{
        console.log(`${name} You are not Eligible for Marriage`);
    }
}
eligibleMarriageBoy("Male","Sachin",23);
eligibleMarriageBoy("Male","Mohan",14);

console.log("====Check Expression to check if number is even or odd====");

var checkNumber = function(val){
    if(val%2==0){
        console.log(` ${val} is=====> even`);
    }else{
        console.log(` ${val} is=====> odd`);
    }
}
checkNumber(50);
checkNumber(45);
checkNumber(13);
checkNumber(10);
