interface IValuable<T> {
    value: T   
}

const printValueT = <Q, T extends IValuable<Q>>(o:T) => console.log(o.value);

const 맛집 = (식당: string) => {
    return 식당;
}

// 락헌
const 락헌 = 맛집('피자스쿨');

// 락헌썸녀
const 락헌썸녀 = 맛집('이탈리안화덕피자');

if(락헌 !== 락헌썸녀) {
    console.log('랜교 놀림감');
} else {
    console.log('그럴일 없음');
}
