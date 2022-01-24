const generateCode = (length) => {
  const code = Array(length)
    .fill(0)
    .map(() => (String.fromCharCode(Math.round(Math.random() * 25 + 65))).join(''));
  const digit = Math.round(Math.random() * 9);
  return `${code}-${digit}`;
};

console.log(generateCode(4));
