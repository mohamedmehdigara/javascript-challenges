function stackMachineCalculator(instructions) {
  const stack = [];
  const instrTokens = instructions.split(' ');

  for (const token of instrTokens) {
    if (token === 'ADD') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a + b);
    } else if (token === 'SUB') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else if (token === 'POP') {
      stack.pop();
    } else if (token === 'DUP') {
      stack.push(stack[stack.length - 1]);
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack[stack.length - 1];
}

module.exports = stackMachineCalculator;
