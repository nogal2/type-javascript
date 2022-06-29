let makeClosure = function () {
  let name = "zero";
  return function () {
    console.log(name);
  };
};

let closure = makeClosure();
closure();

"전역 컨텍스트" = {
  변수객체: {
    arguments: null,
    variable: [{makeClosure: function}, 'closure']  ,
  },
  scopeChain: ['전역 변수객체'],
  this: window,
}
"makeClosure 컨텍스트"= {
  변수객체: {
    arguments: null,
    variable: [{name:'zero'}]
  },
  scopeChain: ['makeClosure 변수객체', '전역 변수객체'],
  this: window,
}

'closure 컨텍스트'= {
  변수객체: {
    arguments: null,
    variable: null,
  },
  scopeChain: ['closure 변수객체', 'makeClosure 변수객체', '전역 변수객체'],
  this: window,
}

let counter = function() {
  let count = 0;
  function changeCount(number) {
    count += number;
  }
  return {
    increase: function () {
      changeCount(1);
    },
    decrease: function() {
      changeCount(-1);
    },
    show: function() {
      alert(count);
    }
  }
};
let counterClosure = counter();
counterClosure.increase();
counterClosure.show();
counterClosure.decrease();
counterClosure.show();

// https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0