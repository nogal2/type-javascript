function taskA(a: number,b: number):Promise<unknown> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a+b
            resolve(res)  
        }, 3000)
    })
    
}

function taskB(a:number):Promise<unknown> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2
            resolve(res) 
         }, 1000);
    })
    
}

function taskC(a:number):Promise<unknown> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1
            resolve(res)
        }, 2000)
    })
}
/* 
    어떤 함수가 Promise 객체를 반환한다는 것은 그 함수가 비동기적으로 동작을 하고
    반환한 Promise 객체를 이용해서 비동기처리의 결과 값을 then과 catch로 이용할 수 있게 만들겠다.
*/

const bPromiseResult = taskA(5,1)
.then((a_res:any) => {
    console.log("A RESULT: ", a_res)
    return taskB(a_res) // 반환하는 것은 taskB를 호출해서 반환하는 Promise객체
})

console.log("fsklefjklsaejfkl")
console.log("fsklefjklsaejfkl")
console.log("fsklefjklsaejfkl")
console.log("fsklefjklsaejfkl")

bPromiseResult.then((b_res:any) => {
    console.log("B RESULT: ", b_res)
    return taskC(b_res)  // 반환하는 것은 taskB를 호출해서 반환하는 Promise객체
})
.then((c_res) => {
    console.log("C RESULT: ", c_res)
})


/* taskA(3,4,(a_res) => {
    console.log("task A : ", a_res)
    taskB(a_res, (b_res) => {
        console.log("taskB : ", b_res)
        taskC(b_res, (c_res) => {
            console.log("task C: ", c_res)
        })
    })
}) */