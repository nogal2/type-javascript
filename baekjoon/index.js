<<<<<<< Updated upstream
=======
<<<<<<< HEAD
var person = {
  name: "zzoon",
  getName: function () {
    return this.name;
  },
  setName: function (arg) {
    this.name = arg;
  },
};

function create_object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var student = create_object(person);

student.setName("me");
console.log(student.getName());
=======
>>>>>>> Stashed changes
function HelloFunc() {
    this.greeting = 'hello';
}

HelloFunc.prototype.call = function(func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
    console.log(greeting)
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

function saySomething(obj, methodName, name) {
    return (function(greeting) {
        return obj[methodName](greeting, name);
    })
}

function newObj(obj, name) {
    obj.func = saySomething(this, 'who', name);
    return obj;
}

newObj.prototype.who = function(greeting, name) {
    console.log(greeting + " " + (name || 'everyone'));
}

var obj1 = new newObj(objHello, 'zzoon');
<<<<<<< Updated upstream
obj1.call();
=======
obj1.call();
>>>>>>> 23f9c13b47fc5b687a7dd30474d24f1a01ef5dff
>>>>>>> Stashed changes
