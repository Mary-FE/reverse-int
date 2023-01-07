module.exports = function reverse (n) {
  let array = String(n).split('').reverse();

  if (n < 0) {
    array.pop();
  }

  return +array.join('');
}
