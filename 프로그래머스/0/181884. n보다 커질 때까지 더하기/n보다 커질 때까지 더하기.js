function solution(numbers, n) {
    let sum = 0;
    for(let x of numbers){
        sum += x;
        if(sum > n) return sum;
    }
}