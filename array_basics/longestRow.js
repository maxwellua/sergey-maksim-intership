function longestRow(arrayToCheck) {
  let startIndex = 0;
  let rowLength = 0;

  const maximum = {
    start: 0,
    length: 0,
  };
  
  arrayToCheck.forEach((item, index) => {
    if (item === 1) {
      rowLength++;
      if (rowLength > maximum.length) {
        maximum.length = rowLength;
        maximum.start = startIndex;  
      };
    } else {
      startIndex = index + 1;
      rowLength = 0;
    };
  });
  
  return `from ${maximum.start} to ${maximum.start + maximum.length - 1}`;
};

arrayOfNums = [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1];
console.log(longestRow(arrayOfNums));
