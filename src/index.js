// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (arguments.length === 0) {
        return arr
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        } else {
            let reverseArr = matrix[i].reverse();
            for (let j = 0; j < reverseArr.length; j++) {
                arr.push(reverseArr[j]);
            }
        }

    }

    return arr;
}
