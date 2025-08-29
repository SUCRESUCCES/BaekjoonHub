function solution(a, b, c) {

    let sum1 = a + b + c;
    let sum2 = a**2 + b**2 + c**2;
    let sum3 = a**3 + b**3 + c**3;
    
    return (a === b && b === c) ? sum1 * sum2 * sum3 : (a === b || b === c || a === c)? sum1 * sum2 : sum1;
}