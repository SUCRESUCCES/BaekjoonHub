function solution(q, r, code) {
    return [...code].filter((ch, i)=> i % q === r).join(''); 
}