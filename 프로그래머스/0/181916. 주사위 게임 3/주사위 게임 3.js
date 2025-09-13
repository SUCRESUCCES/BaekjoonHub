function solution(a, b, c, d) {
    
    let arr = [a, b, c, d];
    arr.sort((x, y) => x - y);// 오름차순 정렬
    
    // 다 같음
    if(arr[0] === arr[3]) return 1111* arr[0]; 
    
    // 세 개 같고 하나 다름
    if(arr[0] === arr[2]) return (10 * arr[0] + arr[3]) ** 2;
    if(arr[1] === arr[3]) return (10 * arr[3] + arr[0]) ** 2;
    
    // 두 개씩 같음
    if(arr[0] === arr[1] && arr[2] === arr[3])
        return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);

    // 두 개 같고 나머지 다름
    if(arr[0] === arr[1]) return arr[2] * arr[3];
    if(arr[1] === arr[2]) return arr[0] * arr[3];
    if(arr[2] === arr[3]) return arr[0] * arr[1];

    // 전부 다 다른 경우
    return arr[0];
}