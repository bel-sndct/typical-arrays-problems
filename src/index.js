
exports.min = function min (array) {
    let result = 0;
    if (arguments.length && array.length !== 0) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < result) {
                result = array[i];
            }
        }
    }
    return result;
}

exports.max = function max (array) {
    let result = 0;
    if (arguments.length && array.length !== 0) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > result) {
                result = array[i];
            }
        }
    }
    return result;
}

exports.avg = function avg (array) {
  return 0;
}
