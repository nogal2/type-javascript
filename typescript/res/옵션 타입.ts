interface Option<T> {
    flatMap<U>(f:(value: T) => None): None
    flatMap<U>(f:(value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
}
class Some<T> implements Option<T> {
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None):None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
        return f(this.value)
    }
    getOrElse(): T {
        return this.value
    }
}

class None implements Option<never> {
    flatMap(): None {
        return this
    }
    getOrElse<U>(value: U): U {
        return value
    }
}

function Option1<T>(value: null | undefined): None { return new None}
function Option2<T>(value: T): Some<T>
function Option2<T>(value: T): Option<T> {
    if (value == null) {
        return new None
    }
    return new Some(value)
}
