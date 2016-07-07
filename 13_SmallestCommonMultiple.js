function smallestCommons(arr) {
  var nums = [], min = Math.min(...arr), max = Math.max(...arr);
  
  
  for(var i = 1; i<=max; i++){
    nums.push(i);
    
  }
  
  function gcd(a,b){
    return !b ? a : gcd(b, a % b);
  }
  function lcm(a,b){
     return (a*b) / gcd(a,b);      
  }
  var multiple = min;
  
  nums.forEach(function(n){
    multiple = lcm(multiple, n);
  });
  
  console.log(nums);
  return multiple;
}

smallestCommons([1,5]);
