console.log("====printing no from 5 to 15 is====");
for (let index = 5; index <=15; index++) {
    console.log(index);
}

console.log("====Printing no from 50 to 40 decrementing order=====");
for (let index = 50; index >=40; index--) {
    console.log(index);
    
}

console.log("==== FIRST 15 Odd Number====");
for (let index = 1; index <=15; index++) {
    if(index%2!==0){
        console.log(`First  15 odd no is :${index}`);
    }
    
}

console.log("==== FIRST 10 Even Number====");
for (let index = 0; index <=10; index++) {
    if(index%2==0){
        console.log(`First 10 Even Number :${index}`);
    }
    
}

console.log("==== Table of 5 ====");
for (let index = 5; index <=50; index=index+5) {
    console.log(index);
    
}

console.log("=== Table of 10 ===");
for (let index = 10; index <=100; index=index+10) {
    console.log(index);
    
}