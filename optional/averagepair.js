function averagePair(input, target) {
    if (input.length === 0) {
        return false;
    }

    let left = 0;
    let right = input.length;

    while (left < right) {
        const avg = average(input[left], input[right])
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

function average(left, right) {
    return (left + right) / 2;
}

module.exports = {
    averagePair
}