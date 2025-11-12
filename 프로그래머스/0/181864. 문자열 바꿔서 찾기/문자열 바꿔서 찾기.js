function solution(myString, pat) {
  const flipped = myString.replace(/A|B/g, ch => (ch === 'A' ? 'B' : 'A'));

  return flipped.includes(pat) ? 1 : 0;
}