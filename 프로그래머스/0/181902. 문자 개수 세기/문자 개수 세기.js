function solution(my_string) {
    return [...my_string].reduce((acc, ch) => { 
        // 문자열을 스프레드(...)로 풀어 문자 배열 만든 뒤, reduce로 순회
        // acc : 누적 배열(길이 52)
        // ch : 현재 순회 중인 문자
        
        let code = ch.charCodeAt(0);    // 현재 문자의 유니코드 값
        if(code >= 65 && code <= 90){   // 대문자 : A(65) ~ Z(90)
            acc[code - 65]++;           // A는 인덱스 0, Z는 인덱스 25
        }else if(code >= 97 && code <= 122){    // 소문자 : a(97) ~ z(122)
            acc[26 + (code - 97)]++;            // a는 인덱스 26, z는 인덱스 51
        }
        return acc; // 수정된 누적 배열 반환 -> 다음 reduce 단계로 전달
    },Array(52).fill(0));   // 초기값 : [0, 0, ...0](길이 52)
}