// 타입 스크립트에 zip 이 무엇인지 설명
interface Array<T> {
    zip<U>(list: U[]): [T, U][]
}

// .zip 구현
Array.prototype.zip = function <T, U> (
    this: T[],
    list: U[],
): [T, U][] {
    return this.map((v,k) =>
        tuple(v, list[k])
    )
}