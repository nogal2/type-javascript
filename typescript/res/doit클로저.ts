function add(x:number): (number:number) => number { // 바깥쪽 유효범위 시작
    return function(y:number): number { // 안쪽 유효범위 시작
        return x+y; // 클로저
    }   // 안쪽 유효범위 끝
}   // 바깥쪽 유효범위 끝

const makeNames = (): () => string => {
    const names = ['jack', 'jane', 'smith']
    let index = 0;
    console.log('a');
    return (): string => {
        console.log(index);
        if(index == names.length) {
            index = 0;   
        }
        return names[index++];
    }
}

const makeName: () => string = makeNames();
console.log([1,2,3,4,5,6].map(n => makeName()));
console.log(makeName());