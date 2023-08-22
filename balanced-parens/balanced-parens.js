const parensAreBalanced = (input) => {
  const stack = [];
  const openingParentheses = "([{";
  const closingParentheses = ")]}";

  for (const char of input) {
    if (openingParentheses.includes(char)) {
      stack.push(char);
    } else if (closingParentheses.includes(char)) {
      const lastOpened = stack.pop();
      if (!lastOpened || openingParentheses.indexOf(lastOpened) !== closingParentheses.indexOf(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = parensAreBalanced;
