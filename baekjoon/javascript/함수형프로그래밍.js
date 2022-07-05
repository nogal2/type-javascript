function reduce(func, arr, memo) {
    let len = arr.length;
      i = 0,
      accum = memo;
  
      for(; i < len; i++) {
        accum = func(accum, arr[i]);
      }
      
      return accum;
  }
  
  let sum = function(x,y) {
    return x+y;
  }
  
  let multiply = function(x,y) {
    return x*y;
  }
  
  const arr = [1,2,3,4];
  
  console.log(reduce(sum, arr, 0));
  console.log(reduce(multiply, arr, 1));