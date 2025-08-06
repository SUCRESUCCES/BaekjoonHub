// readline 모듈 import : 모듈 불러오기
const readline = require('readline');

// 입출력을 위한 interface 객체 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// line에 입력한 문자열이 들어옴. 입력한 값이 저장됨
rl.on('line', function (line) {
    input = [line];
    // 인터페이스 종료(무한 방지)
    rl.close();
}).on('close',function(){
    // 입력이 끝난 후 실행할 코드 작성
    str = input[0];
    console.log(str);
    // 프로세스 종료
    process.exit();
});