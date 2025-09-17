function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((str) =>{
        let num = Number(str.slice(s, s + l));
        if(num > k) answer.push(num);
        })
    return answer;
}