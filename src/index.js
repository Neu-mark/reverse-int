module.exports = function reverse(n) {
    let str = Math.abs(n).toString();
    let reversedStr = str.split("").reverse().join("");
    return parseInt(reversedStr);
};
