function solution(new_id) {
  let answer = new_id.toLowerCase(); // 1 소문자 변환
  for (let i = 0; 0 < answer.length; i++) {
    const ascNum = answer.charCodeAt(i);
    if (
      // 2 특수문자제거
      (ascNum > 32 && ascNum < 46) ||
      (ascNum > 57 && ascNum < 65) ||
      (ascNum > 90 && ascNum < 97) ||
      (ascNum > 122 && ascNum < 127) ||
      ascNum === "/"
    ) {
      answer = answer.replace(String.fromCharCode(ascNum), "");
    }
  }
  // 3 마침표 1개로 바꿈.
  answer.replace(/\.{2,}/g, ".");
  // 4 처음과 마지막에 . 이 있다면 제거
  // prettier-ignore
  if (answer.indexOf(".") === 0) // 문자열 첫번째가 . 이면
    answer = str.substring(1);
  else if (answer.charAt(answer.length - 1) === ".")  // 문자열 마지막이 . 이면
    answer = answer.substring(0, answer.length - 1);

  // 5 빈문자열이라면 new_id에 a를 대입
  if (answer === "") answer = "a";

  // 6 길이 16자 이상이면 15개를 제외한 나머지 문자들 제거
  if (answer.length >= 16) answer = answer.substring(15);
  else if (answer.charAt(answer.length - 1) === ".")
    // 문자열 마지막이 . 이면
    answer = answer.substring(0, answer.length - 1);

  // 7 길이 2자 이하면 new_id의 마지막 문자를 new_id의 길이가 3이 될때까지 반복
  if (answer.length <= 2) {
    const lastChar = answer.charAt(answer.length - 1);
    if (answer.length === 1) answer.concat(lastChar + lastChar);
    else if (answer.length === 1) answer.concat(lastChar);
  }
  return answer;
}

//const str = ["fse", "sefm", "samf", "zmxdf", "smfn"];
let str = "asmdnfle";
const s = str.replace("a", "");
const d = "..fae..";
console.log(str.substring(1));
