function solution(my_string, m, c) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        if(i % m === (c - 1)){
        // i번째 문자가 우리가 원하는 c번째 열에 있으면
           answer+= my_string[i];
           }
    }
    return answer;
}