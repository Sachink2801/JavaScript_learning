let objectSachin={
    fullName:"sachin sanjay kadam",
    age:23,
    ismarried:false,
}
for (const key in objectSachin) {
    if (Object.hasOwnProperty.call(objectSachin, key)) {
        const element = objectSachin[key];
        console.log(element);

    }
}