var str="   Hey you are doing good keep it up  ";

var stringHandsOn =function(){
    var str="   Hey you are doing good keep it up.   ";
    console.log(`Given string is:${str}`);
    var str1=str.length;
    console.log(`Length of the string is:${str1}`);
    var str2=str.trim()
    var str3=str2.length;
    console.log(`Remove extra spaces:${str3}`);
    var str4=str1-str3;
    console.log(`trem string count - from original strem count :${str4}`);
    var str5=str2.charAt(0);
    var str6=str2.charAt(32);
    console.log(`First and Last character of string after trim is: ${str5},${str6}`);
    var str7=str2.split(" ");
    console.log(`total no of word in string :${str7}`);
    str7=str7.length;
    console.log(`Total no of string is: ${str7}`);
    console.log(`index of word "good" is:${str2.indexOf('good')}`);
    console.log(`Substring starting from index 22 is: ${str2.substring(22)}`);
    console.log(`substring end with word "up" is: ${str2.endsWith('up')}`);
    console.log(`string start with word "Hey" is: ${str2.startsWith('Hey')}`);

    

}
stringHandsOn();