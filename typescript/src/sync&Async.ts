/* function taskA(a: number,b: number, cb: (res:number)=> void):void {
    setTimeout(() => {
      const res = a+b
      cb(res)  
    }, 3000)
}

function taskB(a:number,cb:(res:number)=> void):void {
    setTimeout(() => {
       const res = a * 2
       cb(res) 
    }, 1000);
}

function  taskC(a:number, cb:(res:number)=> void):void {
    setTimeout(() => {
        const res = a * -1
        cb(res)
    }, 2000)
}

taskA(3,4, (res) => {
    console.log("A TASK RESULT: ", res) 
})

taskB(7, (res) => {
    console.log("B TASK RESULT: ", res)
})

taskC(14, (res) => {
    console.log("C TASK RESULT: ", res)
})
console.log("코드 끝")

 */

/* function taskA(a: number,b: number, cb: (res:number)=> void):void {
    setTimeout(() => {
      const res = a+b
      cb(res)  
    }, 3000)
}

function taskB(a:number,cb:(res:number)=> void):void {
    setTimeout(() => {
       const res = a * 2
       cb(res) 
    }, 1000);
}

function  taskC(a:number, cb:(res:number)=> void):void {
    setTimeout(() => {
        const res = a * -1
        cb(res)
    }, 2000)
}

taskA(4,5, (a_res) => {
    console.log("A Result", a_res)
    taskB(a_res, (b_res) => {
        console.log("B Result", b_res)
        taskC(b_res, (c_res) => {
            console.log("C Result", c_res)
        })
    })
})

console.log("코드 끝") */