const squareRoot = (radicand) => {
  let guess = radicand / 2;

  // Define a tolerance level for approximation
  const tolerance = 1e-6; // You can adjust the tolerance level

  // Iterate until the difference between guess and actual answer is within tolerance
  while (Math.abs(guess * guess - radicand) > tolerance) {
    // Step 2: Calculate a new guess using the Babylonian method
    guess = (guess + radicand / guess) / 2;
  }

  // Return the final approximation
  return guess;
}

module.exports = squareRoot
