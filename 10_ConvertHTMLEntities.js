function convert(str) {
  str = str.split("");
  
  for(var i = 0; i< str.length; i++){
    
    if( str[i] === "&"){
      str[i] = "&amp;";
    }else if(str[i] === "<"){
      str[i] = "&lt;";
    }else if(str[i] === ">"){
      str[i] = "&gt;";
    }else if(str[i] === '"'){
      str[i] = "&quot;"; 
    }else if(str[i] === "'"){
      str[i] = "&apos;";
      
    }
  }
  str = str.join("");
  
  return str;


}


convert("Dolce & Gabbana");
