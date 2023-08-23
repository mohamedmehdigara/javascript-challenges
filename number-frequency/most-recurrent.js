const mostRecurrent = (numbers) => {
  const frequency = {};
  let maxFrequency = 0;
  let mostRecurrentNumber = null;

  for (const num of numbers) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }

    if (frequency[num] >= maxFrequency) {
      maxFrequency = frequency[num];
      mostRecurrentNumber = num;
    }
  }

  return mostRecurrentNumber;
};

module.exports = mostRecurrent;
