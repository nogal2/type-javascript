function A(arg) {
  if (!(this instanceof A)) return A(arg);
  this.value = arg ? arg : 0;
}

let a = new A(100);
let b = A(10);

console.log(a.value);
console.log(b.value);
console.log(global.value);
