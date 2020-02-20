
module.exports = function towelSort (matrix = []) {
  flattenDeep = (arr1) => arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), [])
  return flattenDeep(matrix.map((arr, idx) => idx%2 != 0 ? arr.reverse() : arr)) 
}
