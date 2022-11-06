
var person={
    Name:"Sachin",
    age:23,
    address:{
        city:"Mumbai",
        state:"Maharashtra",
    }
}

var object={...person};
// console.table(person);
// console.table(object)
console.log(object.address.city="Pune");
console.table(person);
console.table(object);

var object2=JSON.parse(JSON.stringify(person));
console.log(person.address.city="Delhi");
console.table(person);
console.table(object2)
