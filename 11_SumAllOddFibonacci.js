function sumFibs(num) {
  var a = 1;
  var b = 1;
  var c = 0;
  var sum = 1;
  while(b<=num){
    if(b % 2 === 1){
      sum += b;
    }
    c = a + b;
    a = b;
    b = c;
    console.log(c);
    
  }

  return sum;
  
}

sumFibs(75025);
