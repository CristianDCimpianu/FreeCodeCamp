function unite(arr1, arr2, arr3, arr4) {
  var arrF = [];
  
  for(a in arr1){
    arrF.push(arr1[a]);
  }
  for(a in arr2){
    arrF.push(arr2[a]);
  }
  for(a in arr3){
    arrF.push(arr3[a]);
  }
  if(arr4 !== null){
    for(a in arr4){
    arrF.push(arr4[a]);
  }
  }
  
  function double(val, pos){
    return arrF.indexOf(val) == pos;
  }
  arrF = arrF.filter(double);
  return arrF;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

