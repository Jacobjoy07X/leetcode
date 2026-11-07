/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >=10){
        num=String(num).split('').reduce((a,b)=>a+Number(b),0)
    }
    return num
};