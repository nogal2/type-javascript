// async

function hello() {
    return 'hello'
}

async function helloAsync() {   // Promise 리턴
    return 'hello Async'
}

console.log(hello())
console.log(helloAsync())

// async 를 함수에 붙이면 Promise객체의 resolve의 결과값을 얻을 수 있다.
helloAsync().then((res) => {
    console.log(res)    // hello Async
})

