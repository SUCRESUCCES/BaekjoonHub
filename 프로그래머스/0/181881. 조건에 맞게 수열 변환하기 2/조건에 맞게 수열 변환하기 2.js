function solution(arr) {
    const transform = (v) =>
    v >= 50 && v % 2 === 0 ? v / 2 :
    v < 50 && v % 2 === 1 ? v * 2 + 1 :
     v;
    
    let x = 0;
    
    while(true) {
        const next = arr.map(transform);
        
        if(arr.every((v, i) => v === next[i])) return x;
        
        arr = next;
        x++;
    }
}