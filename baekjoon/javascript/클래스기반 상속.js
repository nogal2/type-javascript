function Person(arg) {
  this.name = arg;
}

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
};

Person.method("setName", function (value) {
  this.name = value;
});
Person.method("getName", function () {
  return this.name;
});

function Student(arg) {}

function F() {}
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;

Student.super = Person.prototype;

var me = new Student();
me.setName("zzoon");
console.log(me.getName());

var inherit = function (Parent, Child) {
  var F = function () {};
  return function (Parent, Child) {
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
  };
};
