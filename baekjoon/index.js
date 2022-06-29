let example = (a,b,c) => {
    return a+b+c;
};

example(1,2,3);
const a = example.call(null,1,2,3);
const b = example.apply(null,[1,2,3]);

console.log(a)
console.log(b)

let obj = {
    string: 'zero',
    yell: function() {
        console.log(this.string)
    }
};

let obj2 = {
    string: 'what?'
};

obj.yell();
obj.yell.call(obj2);