const person={
    name:"Sachin",
    age:23
}
Object.freeze(person);
person.age=23;
person.city="Mumbai";
//console.log(person);

const arrayNumbers = [2, 4, 5, 6, 7];
// arrayNumbers = [ ];
//Object.freeze(arrayNumbers); // Immutable: We can not change the array values after creation or defining
arrayNumbers.push(99);
//console.log(arrayNumbers);

const student = {
    name: "Mohit",
    rollNo : 1234
}

const address = {
    city: "Mumbai",
    street: "AS CLUB"
}

let studentClone = Object.assign({}, student);// Deep cloning will be performed
studentClone.name = "Mohit Sharma";
console.log(studentClone);
console.log(student);
let mergedObject = Object.assign({}, student, address);
console.log(mergedObject);
