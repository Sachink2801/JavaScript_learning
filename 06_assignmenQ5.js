function evenPositionChar(str) {
    for (let index = 0; index < str.length; index++) {
      var char=str.charAt(index);
  
      if(index %2==0 && char!=(" "))
      {
        console.log(char);
      } 
    } 
    }
    evenPositionChar("Hard Work Always Pays Back");
    console.log("..................................................................");
    evenPositionChar("Soon I will be Angular IT Champ");
  
    console.log("-------------------------------------------------------------------");
  
  function oddPositionChar(str) {
    for (let index = 0; index < str.length; index++) {
      var char=str.charAt(index);
  
      if(index %2!=0 && char!=(" "))
      {
        console.log(char);
      } 
    } 
    }
    oddPositionChar("Hard Work Always Pays Back");
    console.log("..................................................................");
  
    oddPositionChar("Soon I will be Angular IT Champ")