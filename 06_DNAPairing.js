function pair(str) {
  var letters = ['A', 'T', 'C', 'G'];
  var pairs = [['A', 'T'],['T', 'A'],['C', 'G'],['G', 'C']];
  var final =[];
  str = str.split("");
  for(var i = 0; i <str.length; i++){
    for(var j = 0; j<letters.length;j++){
      if(str[i] === letters[j]){
        final.push(pairs[j]);
      } 
    }
  }
  return final;
}

pair("GCG");