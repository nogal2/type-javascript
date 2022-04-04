function taskA(a: number,b: number, cb: (res:number)=> void):void {
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

console.log("코드 끝")

