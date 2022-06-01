function outerFunc() {
    var x = 10;
    var innerFunc = function() {console.log(x)} // 클로저
    return innerFunc;
}

var inner = outerFunc();
inner();

/* 
함수는 일급 객체로 취급 된다. 이는 함수를 다른 함수의 인자로 넘길 수도 있고, return으로 함수를 통째로 반환 받을 수도 있음을 의미한다.
여기서 최종 반환되는 함수가 외부 함수의 지역변수에 접근하고 있다는 것이 중요하다. 이 지역변수에 접근하려면, 함수가 종료되어 외부 함수의
컨텍스트가 반환되더라도 변수 객체는 반환되는 내부 함수의 스코프 체인에 그대로 남아 있어야만 접근할 수 있다. 이것이 바로 클로저다.
클로저는 "이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다". 그리고 클로저로 참조되는 외부 변수 즉, outerFunc의 
x와 같은 변수를 자유 변수(Free variable)라고 한다. closure라는 이름은 함수가 자유변수에 대해 닫혀있다는 의미인데, 우리말로 의역하면
'자유 변수에 엮여있는 함수'라는 표현이 맞을 듯 하다.
*/

function outerFunc2() {
    var x =1;

    return function() {
        // 함수로직
    }
}
var new_func = outerFunc2();
new_func();

function outerFunc3(arg1, arg2) {
    var local = 8;
    function innerFunc(innerArg) {
        console.log((arg1 + arg2) / (innerArg + local))
    }
    return innerFunc;
}

var exam1 = outerFunc3(2, 4);
exam1(2)