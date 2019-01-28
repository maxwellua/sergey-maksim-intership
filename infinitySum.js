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

const infinitAddition = sum();

console.log(infinitAddition); // 0
infinitAddition.reset();
console.log(infinitAddition(1)); // 1
infinitAddition.reset();
console.log(infinitAddition(1)(2)); //3
infinitAddition.reset();
console.log(infinitAddition(3)(4)(5)); // 12
