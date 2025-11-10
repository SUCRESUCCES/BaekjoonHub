function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    const num1 = Number(a);
    const num2 = Number(b);
    
    switch (op){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default :
            throw new Error("오류")
    } 
}