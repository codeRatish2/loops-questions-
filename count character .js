var char= "ababcaa"
var count= 0;
 
  for(i=0; char[i]!= undefined; i++){
    if(char[i]=="a"){
        ++count;
    }
  }
   console.log("a =" + count);