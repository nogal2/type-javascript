interface IValuable<T> {
    value: T   
}

const printValueT = <Q, T extends IValuable<Q>>(o:T) => console.log(o.value);
