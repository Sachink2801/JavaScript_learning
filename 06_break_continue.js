console.warn("+++ using break +++");
for (let index = 0; index < 10; index++) {
    if(index==5){
        break;
    }
    console.log(index); 
}

console.warn("+++ using continue +++");
for (let index = 0; index < 10; index++) {
    if(index==2){
        continue;
    }
    console.log(index); 
}