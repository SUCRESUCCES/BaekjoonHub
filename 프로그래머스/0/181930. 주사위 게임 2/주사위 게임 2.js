function solution(a, b, c) {

    const sum1 = a + b + c;
    const sum2 = a**2 + b**2 + c**2;
    const sum3 = a**3 + b**3 + c**3;
    
    return (a === b && b === c) ? sum1 * sum2 * sum3 : (a === b || b === c || a === c)? sum1 * sum2 : sum1;
}