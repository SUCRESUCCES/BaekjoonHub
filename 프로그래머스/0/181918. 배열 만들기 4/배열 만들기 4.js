function solution(arr) {
    var stk = [];
    let i = 0;
    while(i < arr.length){
    // i가 arr의 길이보다 작을 동안 반복
    // for문은 무조건 i++, 그래서 while로 i 직접 제어
        if(stk.length === 0){
            stk.push(arr[i]);
            // 비어있으면 arr[i]를 skt에 추가(push)
            i++;
            // i에 1 더함
        }else if(stk[stk.length - 1] < arr[i]){
        // 스택의 마지막 값 < 배열 값
            stk.push(arr[i]);
            // 추가(push)
            i++;
        }else{
            stk.pop();
            // 아니면 제거(pop)
            // 여기서는 i 증가 X
        }
    }
    return stk;
}