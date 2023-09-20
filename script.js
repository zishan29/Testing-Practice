export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str) {
  return str.split('').reverse().join('');
}

export function Calculator() {
  this.add = (a, b) => a + b;
  this.sub = (a, b) => a - b;
  this.mul = (a, b) => a * b;
  this.div = (a, b) => a / b;
}

export function caesarCipher(str, num) {
  const arr = [];
  const re = /[a-zA-Z]/;
  for (const c of str) {
    if (re.test(c)) {
      const start =
        c === c.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      const diff = c.charCodeAt(0) - start;
      const sh = num >= 0 ? diff + num : diff + Math.abs(26 - Math.abs(num));
      const code = (sh % 26) + start;
      arr.push(String.fromCharCode(code));
    } else {
      arr.push(c);
    }
  }

  return arr.join('');
}

function getAverage(arr) {
  const sum = arr.reduce((prevSum, curr) => prevSum + curr, 0);
  return sum / arr.length;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

export function analyzeArray(arr) {
  const obj = {};
  obj.average = getAverage(arr);
  obj.min = getMin(arr);
  obj.max = getMax(arr);
  obj.length = arr.length;
  return obj;
}
