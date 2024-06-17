function generateRandomArray(length, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * max));
}

module.exports = {
    generateRandomArray
};