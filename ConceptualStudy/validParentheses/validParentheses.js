const fs = require("fs");
const route =
  "./kjy/algorithm/personalStudy/validParentheses/validParentheses.txt";
const input = fs.readFileSync(route).toString().split("\n")[0];

const validParent = () => {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "{" || input[i] === "[") {
      stack.push(input[i]);
    } else {
      const lastChar = stack.pop();
      if (
        (input[i] === "}" && lastChar !== "{") ||
        (input[i] === ")" && lastChar !== "(") ||
        (input[i] === "]" && lastChar !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

validParent();
