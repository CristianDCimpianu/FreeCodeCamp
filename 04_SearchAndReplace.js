function myReplace(str, before, after) {
  // create a second str so to keep intact original
  var str2 = str;
  //divide this second str into an array of individual words, instead of the entire sentence
  str2 = str2.split(" ");
  
  // design a loop that goes through all the words in the array and checks whether that word is the same as the before value, if it is then change that word, in his specific index with the after value
  for(var i = 0; i< str2.length; i++)
  {
  
    if(str2[i].toLowerCase() === before.toLowerCase())
    {
      var str3 = str2[i].split("");
      var str4 = str2[i].split("");
      if(str3[0] === str4[0].toLowerCase())
      {
        str2[i] = after;
    
      }else
      {
        var after2 = after.split("");
        after2[0] = after2[0].toUpperCase();
        str2[i] = after2.join("");
        
      }
    }
    
  }
  //join back the array of words in a uniform sentence
  str2 = str2.join(" ");
  
  return str2;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
