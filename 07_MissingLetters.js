function fearNotLetter(str) {
   
  str = str.split("");
  for(a in str){
    str[a] = str[a].charCodeAt();
  }
  var initial = str[0];
  for(var i=0; i<str.length;i++){
    if(str[i] !== initial + i){
      str = String.fromCharCode(str[i-1] + 1);
      return str;
    }
  }
  return undefined;
}

fearNotLetter("abce");