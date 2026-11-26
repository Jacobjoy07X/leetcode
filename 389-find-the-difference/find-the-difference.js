/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sort = s.split('').sort();
    const sorted = t.split('').sort();

    for (let i = 0; i < sorted.length; i++) {
        if (sort[i] !== sorted[i]) {
            return sorted[i];
        }
    }
};