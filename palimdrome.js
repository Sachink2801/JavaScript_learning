console.log("Palindrome");

function palimdrome(params) {

    var str=params.toString();
    //console.log(typeof str);
    var strLen=str.length;
    var reverse="";
    for (let index = strLen-1; index>=0; index--) {
         reverse=reverse+str.charAt(index);
        console.log(reverse);
        var temp=+reverse;
        console.log(typeof temp);
        if (params==temp) {
            console.log("Palindrome");

        }
        else
        {
            console.log("Not palimdrome");
        }



    }


}
palimdrome(111);


console.log("............................................");
var str="Sachin Kadam",count=0;
for (let index = 0; index < str.length; index++) {
    let char=str.charAt(index);
    if(char=="a")
    {
        count++;

    }

}
console.log(count);



function armStrong(params) {

    for (let index = 0; index <params; index++) {

    }
}
armStrong(123);
