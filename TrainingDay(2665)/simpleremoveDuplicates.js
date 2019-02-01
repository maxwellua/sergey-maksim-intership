const duplicatedList = [3, 4, 4, 3, 6, 3];

function solve(inputList) {
  const result = [];
  inputList.forEach((item, index) => {
    if (!inputList.includes(item, index + 1)) {
      result.push(item);
    };
  });
  
  return result;
};

console.log(solve(duplicatedList));
