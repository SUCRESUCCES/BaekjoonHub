function solution(my_string, s, e) {
    const arr = my_string.split("");
    const reversed = arr.slice(s, e + 1).reverse();
    return arr.slice(0, s).join("") + reversed.join("") + arr.slice(e + 1).join("");
}