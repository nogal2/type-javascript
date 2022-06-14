/* 
    컨텍스트의 원칙 네 가지.
    먼저 전역 컨텍스트 하나 생성 후, 함수 호출 시마다 컨텍스트가 생깁니다.
    컨텍스트 생성 시 컨텍스트 안에 변수객체(arguments, variable), scope chain, this가 생성됩니다.
    컨텍스트 생성 후 함수가 실행되는데, 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾습니다.
    함수 실행이 마무리되면 해당 컨텍스트는 사라집니다.(클로저 제외) 페이지가 종료되면 전역 컨텍스트가 사라집니다.

*/
var nam = 'zero';
function wow(word) {
    console.log(word + ' ' + nam);
}

function say() {
    var name = 'nero'
    wow('hello');
}
say();

'전역 컨텍스트' = {
    변수객체: {
        arguments: null,
        variable: ['nam', 'wow', 'say'],
    },
    scopeChain: ['전역 변수객체'],
    this: window,
}