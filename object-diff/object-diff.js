const diff = (newCode, oldCode) => {
  const result = [];

  for (const key in oldCode) {
    if (!(key in newCode)) {
      result.push(['-', key, oldCode[key]]);
    }
  }

  for (const key in newCode) {
    if (!(key in oldCode)) {
      result.push(['+', key, newCode[key]]);
    } else if (newCode[key] !== oldCode[key]) {
      result.push([' ', key, newCode[key]]);
    }
  }

  return result;
}

module.exports = diff;
