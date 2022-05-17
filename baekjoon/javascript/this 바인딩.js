// myObject 객체 생성
let myObject = {
  name: "foo",
  sayName: function () {
    console.log(this.name);
  },
};

// otherObject 객체 생성
let otherObject = {
  name: "bar",
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

myObject.sayName(); // foo
otherObject.sayName(); // bar

value = 100;

var myObject = {
  value: 1,
  func1: function () {
    this.value += 1;
    console.log("func1() called. this.value : " + this.value);

    // func2() 내부함수
    func2 = function () {
      this.value += 1;
      console.log("func2() called. this.value : " + this.value);

      // func3() 내부함수
      func3 = function () {
        this.value += 1;
        console.log("func3() called. this.value : " + this.value);
      };

      func3(); //func3() 내부 함수 호출
    };
    func2(); // func2() 내부함수 호출
  },
};
myObject.func1(); // func1() 메서드 호출
/* 
func() called. this.value : 2
func2() called. this.value : 101
func3() called. this.value : 102

*/
