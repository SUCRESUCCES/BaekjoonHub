function solution(ineq, eq, n, m) {
    const operations = {
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
        '>!' : (a, b) => a > b,
        '<!' : (a, b) => a < b,
    };
    
    const op = ineq + eq;
    
    return +(operations[op](n,m));
}