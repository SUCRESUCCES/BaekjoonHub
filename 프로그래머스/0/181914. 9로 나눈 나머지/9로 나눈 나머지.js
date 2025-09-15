function solution(number) {
    const chars = number.split("");
    const digits = chars.map(ch => Number(ch));
    const sum = digits.reduce((acc, cur) => acc + cur, 0);
    return sum % 9;
}