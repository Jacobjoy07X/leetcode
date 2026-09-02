/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius +273.15
    let farnhite= celsius*1.80+32
    return [kelvin,farnhite]
};
console.log(convertTemperature(111))