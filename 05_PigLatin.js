function translate(str) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z' ];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var str2 = str.split("");
  for(a in vowels){
    if(vowels[a] === str2[0]){
      str+="way";
    }
  }
  for(e in consonants){
    if(consonants[e] === str2[0]){
      str2.push(str2.shift());
      str = str2.join("");
      str +="ay";
    } 
  }
  
  
  return str;
}

translate("glove");
