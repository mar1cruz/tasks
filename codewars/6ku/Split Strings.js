function solution(str) {
    return str ? str.match(/.{1,2}/g).map(s => s.length === 1 ? s + '_' : s) : []
}

console.log(solution(""))

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001