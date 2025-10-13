function solution(num_list) {
    const result =  num_list.reduce((acc, cur, i) =>{
        if(i % 2 === 0){
            acc.odd+= cur;
        }else{
            acc.even+= cur;
        }
        return acc;
    }, {odd: 0, even: 0});
    return Math.max(result.odd, result.even);
}