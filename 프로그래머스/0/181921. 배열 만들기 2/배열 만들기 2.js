function solution(l, r) {
    const ans = [];
    
    for(let i = l; i <= r; i++){
        const s = String(i);
        if([...s].every(ch => ch === '0' || ch === '5')){
            ans.push(i);
        }
    }
    return ans.length ? ans : [-1];
}