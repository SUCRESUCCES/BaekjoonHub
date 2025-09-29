function solution(my_string, indices) {
    let chars = my_string.split('');
    const result = chars.filter((_, i) => !indices.includes(i)).join('');
    return result;
}