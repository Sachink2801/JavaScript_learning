console.warn("===Print even no of character===");

var givenStr="I love javaScript";
var strLength=givenStr.length;
for (let index = 0; index < strLength; index++) {
    if(index%2==0){
        var charAt=givenStr.charAt(index);
        console.log(charAt);
    }
    
}

console.warn("=== Print Vowels form string ===");
var givenStr="hey i am sachin kadam";
var strLength=givenStr.length;
//console.log(strLength);
for (let index = 0; index < strLength; index++) {
    var char=givenStr.charAt(index);
    if(char=="a" ||char=="e" || char=="i" || char=="o" || char=="u"){
        console.log(char);
    }
}

console.warn("==== Using toLocaleLowerCase()");
var givenStr="Hey i am SACHIN KADAM";
var strLength=givenStr.length;
var strLower=givenStr.toLocaleLowerCase();
for (let index = 0; index < strLength; index++) {
    var char=strLower.charAt(index);
    if(char=="a" ||char=="e" || char=="i" || char=="o" || char=="u"){
        console.log(char);
    }
}


    


