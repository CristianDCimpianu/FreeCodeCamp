function findElement(arr, func) {
  
  var num;

  
  for (var a = 0; a < arr.length; a++) {
    if (func(arr[a])) {
      
      num = arr[a];
      return num;
    }
  }

  
  return num;
}

find([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});

function find(arr, func) {
  
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
