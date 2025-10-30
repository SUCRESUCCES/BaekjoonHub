function solution(my_string, alp) {
    return my_string.split('').map(ch => ch === alp ? ch.toUpperCase() : ch).join('');
}