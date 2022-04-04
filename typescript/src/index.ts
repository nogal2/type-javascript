function taskA(a,b, cb) {
    setTimeout(() => {
      const res = a+b
      cb(res)  
    }, 3000)
}

function taskB(a,cb) {
    setTimeout(() => {
       const res = a * 2
       cb(res) 
    }, 1000);
}

function  taskC(a, cb) {
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

