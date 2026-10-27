/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const a=[];
    for(let char of s){
        if(char=="("|| char=="["||char=="{"){
            a.push(char)
        }
        else{
            const b=a.pop()
            if(
                (char===")" && b !=="(") ||

            (char=== "]" && b !=="[")||

            (char === "}" && b!=="{"))
            {
                return false
            }
        }
    }
    return a.length===0
};