function sumPrimes(num){
  var arr = [];
  var myArr = [];
  for(var i = 2; i<=num;i++){
    arr.push(i);
  }
  arr.map(function(val, index, ar){
      for(var j = index + 1; j<=ar.length; j++){
        if(ar[j] % val === 0){
          ar.splice(j,1);
        } 
      }

    });
  
  var answer = arr.reduce(function(prev,curr){
    return prev + curr;
  },0);
  return answer;

}

sumPrimes(20);