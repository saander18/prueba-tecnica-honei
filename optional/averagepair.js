function averagePair(input, target) {
    if (input.length === 0) {
        return false;
    }

    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        const avg = (input[left] + input[right]) / 2;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

module.exports = {
    averagePair
}