/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    
    var dim = binaryMatrix.dimensions()
    var rows = dim[0]
    var cols = dim[1]
    
    if(rows === 0 || cols === 0) {
        return -1
    }
    var result = -1
    var r = 0
    var c = cols - 1
    
    while(r < rows && c >= 0) {
        if(binaryMatrix.get(r, c) === 1) {
            result = c
            c--
        }
        else {
            r++
        }
    } 
    return result
};