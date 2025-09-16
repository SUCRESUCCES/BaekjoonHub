function solution(my_string, queries) {
    let arr = [...my_string];
    queries.forEach(([s, e]) =>{
        while(s < e){
            [arr[s], arr[e]] = [arr[e],  arr[s]];
            s++; e--;
        }
    })
    return arr.join('');
}