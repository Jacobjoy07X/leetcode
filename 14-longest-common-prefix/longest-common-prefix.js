/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 let a=strs[0]
 for (let i of strs){
    while(!i.startsWith(a)){
        a = a.slice(0,-1)
    }
 }   
 return a
};