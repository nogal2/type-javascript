function isPositive(number:any, resolve:any, reject:any) {
    setTimeout(()=>{
        if(typeof number == 'number') {
            // 성공 -> resolve
            resolve(number >= 0 ? "양수" : "음수")
        } else {
            // 실패 -> reject
            reject("주어진 값이 숫자형 값이 아닙니다.")
        }
    }, 2000)
}

function isPositiveP(number:any) {
    const executor = (resolve:any, reject:any) => { // 실행자
        setTimeout(() => {
            if(typeof number == 'number') {
                // 성공 -> resolve
                console.log(number)
                resolve(number >= 0 ? "양수" : "음수")
            } else {
                // 실패 -> reject
                reject("주어진 값이 숫자형 값이 아닙니다.")
            }
        }, 2000);
    }

    const asyncTask = new Promise(executor);
    return asyncTask
}
// 어떤 함수가 Promise를 반환한다고 하면 이 함수는 비동기 작업을 하고 그 작업의 결과를 promise결과로 반환받아서 사용할수 있는 함수라고 이해하면 된다.
// 이렇게 하면 Promise에서 반환한 resolve나 reject중 하나를 아무대서나 사용할 수 있음.
const res = isPositiveP(101)    

res
    .then((res) => {console.log("작업 성공:", res)})    // 작업 성공: 양수
    .catch((err)=>{console.log("작업 실패: ", err)})

const errr = isPositiveP([])

errr
    .then((res) => {console.log('작업 성공: ', res)})   
    .catch((err) => {console.log("작업 실패: ", err)})  // 작업 실패:  주어진 값이 숫자형 값이 아닙니다.

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
        반환한 Promise 객체를 이용해서 비동기처리의 결과 값을 then과 catch로 이용할 수 있게 만들겠다는 것이다.
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