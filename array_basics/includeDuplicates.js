const arrayOfInt = [1, 3, 4, 5, 2];

function includesDuplicates(arrayToCheck) { 
  arrayToCheck.forEach((element, index) => {
    if (arrayToCheck.includes(element, index + 1)) {
      return true;
    }; 
  });

  return false;
};

console.log(includesDuplicates(arrayOfInt));
