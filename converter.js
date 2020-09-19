//Stack Data structure implementation
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

//Converts the number from decimal to other base
function converter(decimalNumber, base) {
  let number = decimalNumber;
  const digits = '0123456789ABCDEF';
  let remainderStack = new Stack();
  let result = '';

  //push remainder to Stack
  while (number >= 1) {
    remainderStack.push(Math.floor(number % base));
    number = number / base;
  }

  //pop from Stack to result
  while (!remainderStack.isEmpty()) {
    result += digits[remainderStack.pop()];
  }

  return result;
}

//Convert Button click
function convert() {
  let number = document.querySelector('#decimal').value;
  let selectBox = document.querySelector('#base');
  let base = selectBox.options[selectBox.selectedIndex].value;
  let result = document.querySelector('#result');

  if (!number) {
    alert('Enter decimal number');
  }

  result.value = converter(number, base);
}
