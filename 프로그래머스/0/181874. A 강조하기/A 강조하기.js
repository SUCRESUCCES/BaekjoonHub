function solution(myString) {
  return myString.split('').map(ch => {
      if (ch === 'a') return 'A';             
      else if (ch >= 'A' && ch <= 'Z' && ch !== 'A') return ch.toLowerCase(); 
      else return ch;
    })
    .join('');
}