function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

let result1 = add(1, 2); // Correct usage
console.log(result1); // Output: 3

try {
  let result2 = add(1, '2'); //This will throw an error
  console.log(result2);
} catch (e) {
  console.error(e.message); // Output: Inputs must be numbers
}

//Alternative Solution using Type Assertion
function addWithAssertion(a: number, b: number): number {
  return a + b;
}

let result3 = addWithAssertion(1, Number('2')); // Using Type Assertion
console.log(result3); // Output: 3