function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((str, i)=>{
        let [s, e] = parts[i];
        answer += str.slice(s, e+1);
    })
    return answer;
}