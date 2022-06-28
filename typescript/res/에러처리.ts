function ask() {
    return prompt('When is your birthday?');
}

/** 
 * @throws {InvalidDateFormatError} 사용자가 생일을 잘못 입력함 
 * @throws {DateIsInTheFutureError} 사용자가 생일을 미래 날짜로 입력함
*/

function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
    let date = new Date(birthday)
    if(!isValid(date)) {
        throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
    }
    if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError('Are you a timmelord?')
    }
    return date
}

function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTime())
}

try {
    let date = parse(ask())
    if(date) {
        console.info('Date is', date.toISOString())
    } else {
        console.error('Error parsing date for some reason');
    }
} catch (e) {
    if (e instanceof RangeError) {
        console.error(e.message);
    } else {
        throw e;
    }
}

// 커스텀 에러타입
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

try {
    let date = parse(ask())
    console.info('Date is', date.toISOString())
} catch (e) {
    if(e instanceof InvalidDateFormatError) {
        console.error(e.message)
    }
    else if (e instanceof DateIsInTheFutureError) {
        console.info(e.message);
    } else {
        throw e;
    }
}

let result = parse(ask())
if (result instanceof InvalidDateFormatError) {
    console.error(result.message);
} else if (result instanceof DateIsInTheFutureError) {
    console.info(result.message);
} else {
    console.info('Date is', result.toISOString())
}