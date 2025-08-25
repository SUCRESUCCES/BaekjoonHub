function solution(ineq, eq, n, m) {
    let isCorrect = false;

    if (ineq === ">") {
        if (eq === "=") {
            isCorrect = (n >= m);
        } else { 
            isCorrect = (n > m);
        }
    } else { 
        if (eq === "=") {
            isCorrect = (n <= m);
        } else { 
            isCorrect = (n < m);
        }
    }
    return isCorrect ? 1 : 0;
}