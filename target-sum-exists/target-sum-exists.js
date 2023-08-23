function targetSumExistsInTwoNumbers(arr, target) {
  const numSet = new Set();

  for (const num of arr) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

function targetSumExistsInThreeNumbers(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const remainingSum = target - arr[i];
    if (targetSumExistsInTwoNumbers(arr.slice(0, i).concat(arr.slice(i + 1)), remainingSum)) {
      return true;
    }
  }

  return false;
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
};
