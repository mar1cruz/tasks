String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())

//https://www.codewars.com/kata/5390bac347d09b7da40006f6