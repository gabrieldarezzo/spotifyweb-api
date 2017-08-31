const sum = (...args) => args.reduce(sum => sum + sum);
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 === 0) ? 'Não é possível divisão por zero!' : num1 / num2;

export { sum, sub, mult, div }
