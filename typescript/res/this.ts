let x = {
  a() {
    return this;
  },
};
console.log(x.a()); // a()의 바디 안에서 this는 객체 x다

let a = x.a;
console.log(a()); // a() 바디 안에 this가 정의 되어있지 않은 상태
