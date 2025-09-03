// 1. operations 객체 정의
const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

// 2. solution 함수 정의
function solution(n, control) {
  // 3. 스프레드 문법과 reduce 메서드 활용
  return [...control].reduce((prev, op) => operations[op](prev), n);
}