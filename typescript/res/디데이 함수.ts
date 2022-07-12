/* eslint-disable prettier/prettier */

/**
 * argDay는 '2022-06-13' 또는 '2022-07-12 19:10:40' 형식으로 입력해야함.
*/
export const makeDday = (argDay: string): number => {
    const dday:any = new Date(argDay);
    const today = new Date().getTime();
    const gap = dday - today;
    console.log(gap);
    const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    return day;
};

/**
 * argDay는 '2022-06-13' 또는 '2022-07-12 19:10:40' 형식으로 입력해야함.
*/
export const makeDhour = (argDay: string): number => {
    const dday:any = new Date(argDay);
    const today = new Date().getTime();
    const gap = dday - today;
    const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return hour;
};

/**
 * argDay는 '2022-06-13' 또는 '2022-07-12 19:10:40' 형식으로 입력해야함.
*/
export const makeDmin = (argDay: string): number => {
    const dday:any = new Date(argDay);
    const today = new Date().getTime();
    const gap = dday - today;
    const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    return min;
};

/**
 * argDay는 '2022-06-13' 또는 '2022-07-12 19:10:40' 형식으로 입력해야함.
*/
export const makeDsec = (argDay: string): number => {
    const dday:any = new Date(argDay);
    const today = new Date().getTime();
    const gap = dday - today;
    const sec = Math.ceil((gap % (1000 * 60)) / 1000);
    return sec;
};

/**
 * argDay는 '2022-06-13' 또는 '2022-07-12 19:10:40' 형식으로 입력해야함.
*/
export const makeDmonth = (argDay: string): number => {
    const month = Math.abs(Number(argDay.slice(5,7)) - (new Date().getMonth() + 1));
    return month;
};

/**
 * argDay는 '2022-06-13' 또는 '2022-07-12 19:10:40' 형식으로 입력해야함.
*/
export const makeDyear = (argDay: string): number => {
    const year = Math.abs(Number(argDay.slice(0,4)) - (new Date().getFullYear()));
    return year;
};

/**
 * argDay는 '2022-06-13' 또는 '2022-07-12 19:10:40' 형식으로 입력해야함.
 * argDay가 현재 시간 보다 앞 설 경우 '오류'(string)를 리턴함. 사용할 때 오류 조건문 거는 것을 추천.
*/
export const currentMoment = (argDay: string): string => {
    const arg = new Date(argDay).getTime();
    const curr = new Date().getTime();
    if (arg > curr) {
        return '오류';
    }
    const day = Math.abs(makeDday(argDay));
    if (day > 364) {
        const year = Math.floor(day / 365);
        return `${year}년 전`;
    } else {
        if (day > 30) {
            const month = Math.floor(day / 30);
            return `${month}개월 전`;
        } else {
            if (day < 31 && day > 0) {
                return `${day}일 전`;
            } else {
                const hour = Math.floor(Math.abs(makeDhour(argDay)));
                if (hour !== 0) {
                    return `${hour}시간 전`;
                } else {
                    const min = Math.floor(Math.abs(makeDmin(argDay)));
                    if (min !== 0) {
                        return `${min}분 전`;
                    } else {
                        const sec = Math.abs(makeDsec(argDay));
                        return `${sec}초 전`;
                    }
                }
            }
        }
    }
};
