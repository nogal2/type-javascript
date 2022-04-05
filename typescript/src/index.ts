// async
function delay(ms:any) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms) // 단순하게 resolve값만 하고싶을때 콜백함수 자리에 넣어도 괜찮음.
    })
}

async function helloAsync() {   // Promise 리턴
    await delay(3000)           // await 호출은 이 함수가 끝나기 전까지 아래에 있는 코드를 수행하지 않는다.. 즉 비동기 안에서 동기적으로 사용하는 것이다.
    return 'hello async'        // await는 async가 있을 때 사용 가능하다.
    /* return delay(3000).then(() => {
        return 'hello Async'
    }) */ 
}

async function main () {
    const res = await helloAsync()
    console.log(res)
    
}

main()


/* helloAsync().then((res) => {
    console.log(res)    // hello Async
}) */
// async 를 함수에 붙이면 Promise객체의 resolve의 결과값을 얻을 수 있다.


