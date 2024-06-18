function maxSubarraySum (input, maxLength) {
    if (input.length === 0) {
        return 0;
    }

    let maxSum = 0;
    let currentSum = 0;
    let left = 0;
    let right = 0;

    while (right < input.length) {
        if (right - left < maxLength) {
            currentSum += input[right];
            right++;
        } else {
            currentSum -= input[left];
            left++;
        }

        if (right - left === maxLength) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}

module.exports = {
    maxSubarraySum
}

