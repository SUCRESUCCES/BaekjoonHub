function solution(a, b) {
    let sum = Number(`${a}${b}`);
    let mul = 2 * a * b;
    if(sum > mul){
        return sum;
    }else if(mul > sum){
        return mul;
    }else if(sum == mul){
        return sum;
    }
}