function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    if(n === 1) return num_list.filter((_, i) => i <= b);
    if(n === 2) return num_list.filter((_, i) => i >= a);
    if(n === 3) return num_list.filter((_, i) => i >= a && i <= b);
    if(n === 4) return num_list.filter((_, i) => i >= a && i <= b && (i-a) % c === 0);
}