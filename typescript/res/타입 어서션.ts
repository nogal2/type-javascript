function formatInput(input: string) {
    // ...
}

function getUserInput(): string | number {
    return '';
}

let input = getUserInput();

// input이 string 이라고 어서션
formatInput(input as string);

// 위 코드와 같은 의미
formatInput(<string>input);

function addToList(list: string[], item: string) {
    console.log(typeof list, item);
}

addToList('this is really,' as any, 'really unsafe');   // string[] 이 아니라 string 으로 받음.
