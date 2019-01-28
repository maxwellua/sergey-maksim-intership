function sum(arg) {
  let totalSum = (!arg) ? 0 : arg;

  function addon(argg) {
    totalSum += argg;
    return addon;
  };

  sum.toString = () => totalSum;
  addon.toString = () => totalSum;
  addon.reset = () => totalSum = 0;

  return addon;
};

let s = sum();

console.log(s); // 0
s.reset();
console.log(s(1)); // 1
s.reset();
console.log(s(1)(2)); //3
s.reset();
console.log(s(3)(4)(5)); // 12
