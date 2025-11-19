// ["2","1","+","3","*"]
const stack = [];
const operatorMap = new Map([
  ["+", (a, b) => a + b],
  ["-", (a, b) => a - b],
  ["*", (a, b) => a * b],
  ["/", (a, b) => Math.trunc(a / b)],
]);

for (const token of tokens) {
  if (operatorMap.has(token)) {
    const b = stack.pop();
    const a = stack.pop();
    const operation = operatorMap.get(token);
    stack.push(operation(a, b));
  } else {
    stack.push(Number(token));
  }
}

return stack[0];
