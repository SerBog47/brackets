module.exports = function check(str, bracketsConfig) {
  if (str.length%2 !== 0) return false;
  let brackets = [];
  let result = str
  res = false;
  bracketsConfig.forEach(element => brackets.push(element.join('')));
  let i = 0;
  while (i < 50) {
    brackets.forEach(element2 => {
      result = result.replace(element2, '')
      if (result === '') return res = true
    });
    i++;
  }
  return res;
}