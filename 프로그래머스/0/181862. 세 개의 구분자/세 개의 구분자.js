function solution(myStr) {
    let parts = myStr.split(/[abc]/);
    parts = parts.filter(v => v !== "");
    return parts.length > 0 ? parts : ["EMPTY"];
}