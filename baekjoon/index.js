function fact(num) {
  let val = 1;
  for(let i = 2; i <= num; i++) {
    val = val * i;
  }
  return val;
}

console.log(fact(10));

function fact2(num) {
  if(num === 0) return 1;
  else return num * fact2(num-1);
}

console.log(fact2(10));

let fact3 = function() {
  let cache = {'0': 1};
  let func = function(n) {
    let result = 0;

    if(typeof(cache[n]) === 'number') {
      result = cache[n];
    } else {
      result = cache[n] = n * func(n-1);
    }

    return result;
  }
  return func;
}();

console.log(fact3(10));