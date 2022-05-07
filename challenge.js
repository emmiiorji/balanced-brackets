const Stack = require('./stack.js');

const pairs = {
  '[': ']',
  '{': '}',
  '(': ')'
};

function balancedBrackets(string) {
  const bracketsStack = new Stack();
  
  for(let i = 0; i < string.length; i += 1) {
    const char = string[i];
    if([...Object.keys(pairs), ...Object.values(pairs)].includes(char)) {
      let bracket1 = bracketsStack.peek();

      if(cannotBalance(bracket1, char)) {
        return false;
      }

      if(isPair(bracket1, char)) {
        if(i === string.length - 1) {
          return true;
        }
        bracketsStack.pop();
      } else {
        if(i === string.length - 1) {
          return false;
        }
        bracketsStack.push(char);
      }
    }
  }

  if(bracketsStack.peek() !== null) {
    return false;
  }
  return true;
}

function cannotBalance(bracket1, bracket2) {
  if(Object.keys(pairs).includes(bracket1) && Object.values(pairs).includes(bracket2)) {
    // When open is followed by a close that's not corresponding, balance cannot happen
    // E.g '[' following ')', cannot balance
    if(isPair(bracket1, bracket2)) {
      return false;
    }
    return true;
  }
  return false;
}

function isPair(bracket1, bracket2) {
  // bracket1 and bracket2 must be an opening and closing bracket respectively
  for(let i = 0 ; i < Object.keys(pairs).length ; i += 1) {
    if(pairs[bracket1] === bracket2) {
      return true;
    }
  }
  return false;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('(hello'))
// => false

console.log(balancedBrackets(')('))
// => false

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
