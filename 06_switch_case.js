console.warn("====Using break====");

for (let index = 1; index <=10; index++) {
    if(index==5){
      break;
    }
    console.log(index);
    
}

console.warn("==== Using continue ====");
for (let index = 1; index <=10; index++) {
    if (index==4) {
      continue;
    }
    console.log(index);
}