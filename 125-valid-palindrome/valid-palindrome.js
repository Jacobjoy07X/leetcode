/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = "";

    for (let ch of s.toLowerCase()) {
        if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
            str += ch;
        }
    }

    return str === str.split("").reverse().join("");
};