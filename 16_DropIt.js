function dropElements(arr, func) {
  // Drop them elements.
  var ans = [];
  for(var i = 0; i<arr.length;i++){
    if(func(arr[i])){
      ans = arr.slice(i);
      break;
    }
    
  }
  return ans;
 
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
