function solution(num_list) {
    var answer = [...num_list].findIndex(x => x <  0)
    return answer;
}