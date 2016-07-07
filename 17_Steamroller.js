
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var ans = [];
  /*
  
    ans.push(arr[0]);
    ans.push(arr[1][0]);
    ans.push(arr[2][0]);
    ans.push(arr[2][1][0][0]);
    
    This is the most basic manual way to make this work, try and use 
    The neccesary steps given here to achieve the desired function
  
  */
  function steams(arr){
    for(var i = 0; i< arr.length;i++){
     if(Array.isArray(arr[i])){
       steams(arr[i]);
     }else{
       ans.push(arr[i]);
     }
   }
   
    return ans;
  }
   return steams(arr);
  
  
}

steamrollArray([1, {}, [3, [[4]]]]);
