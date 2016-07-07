function diff(arr1, arr2) {
  
  // Same, same; but different.
  var newArr = arr1.concat(arr2);

  function check(value) {
    if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
      return value;
    }
  }

  return newArr.filter(check);
  
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
