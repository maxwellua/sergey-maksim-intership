const arrayOfInt = [1, 3, 4, 5, 2];

function includesDuplicates(arrayToCheck) {
  let hasSameValues = false;
  
  arrayToCheck.forEach((element, index) => {
    if (arrayToCheck.includes(element, index + 1)) {
      hasSameValues = true;
    }; 
  });

  return hasSameValues;
};

console.log(includesDuplicates(arrayOfInt));
