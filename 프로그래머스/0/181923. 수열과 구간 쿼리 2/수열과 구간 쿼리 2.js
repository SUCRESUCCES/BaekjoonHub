function solution(arr, queries) {
    return queries.map(([s, e, k]) =>{
        let part = arr.slice(s, e + 1);
        
        let filtered = part.filter(x => x > k);
        
        return filtered.length ? Math.min(...filtered) : -1;
    });
}