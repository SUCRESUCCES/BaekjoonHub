function solution(n) {
    var answer = [];
    answer.push(n); // 시작 숫자 n을 수열의 첫번째 값으로 넣기
    while(n !== 1){ // n이 1이 될 때까지 계속 반복
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
        answer.push(n); // 새로 바뀐 n을 배열에 기록
    }
    return answer;
}

