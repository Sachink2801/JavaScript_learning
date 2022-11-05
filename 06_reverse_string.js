function reverseStr(str) {
    var res='';

    for (let index = str.length-1; index>=0; index--) {
        res=res+str[index];   
    }
    console.log(`The reversed string of ${str} is :${res}`);


}
reverseStr("Hello i am Sachin Kadam");
reverseStr("Soon I will be Angular IT Champ");