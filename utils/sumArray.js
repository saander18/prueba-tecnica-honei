function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

module.exports = {
    sumArray
};