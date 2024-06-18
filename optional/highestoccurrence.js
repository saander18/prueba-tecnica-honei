function highestOccurrence(arr) {
    const frequencyMap = {}; 
    
    arr.forEach(elem => {
        frequencyMap[elem] = (frequencyMap[elem] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequencyMap));

    const result = Object.keys(frequencyMap).filter(key => frequencyMap[key] === maxFrequency);

    return result;
}
module.exports = {
    highestOccurrence
}