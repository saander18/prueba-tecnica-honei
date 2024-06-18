function generateRandomArray(length, max) {
    console.log('Generating random array of numbers');
    return Array.from({ length }, () => Math.floor(Math.random() * max));
}

module.exports = {
    generateRandomArray
};