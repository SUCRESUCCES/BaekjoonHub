function solution(code) {
    let mode = 0;
    let result = '';
    for(let i = 0;  i < code.length; i++){
        if(mode === 0){
            code[i] === '1' ? mode = 1 : (i % 2 === 0 && (result += code[i]));
        }else{
            code[i] === '1' ? mode = 0 : (i % 2 !== 0 && (result += code[i]));
           }
    }
    return result === '' ? 'EMPTY' : result;
}