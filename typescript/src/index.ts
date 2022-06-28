type Executor<T> = (
    resolve: (result: T) => void,
    reject: (error: unknown) => void
) => void
class Promise1<T> {
    constructor(f: Executor<T>) {}
    then<U>(g: (result: T) => Promise1<U>): Promise1<U> {}
    catch<U>(g: (error: unknown) => Promise1<U>): Promise1<U> {}
}




