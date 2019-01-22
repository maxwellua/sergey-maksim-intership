function divisors(integer) {
  let divisorsList = [];
 
  for (let i = 2; i <= integer - 1; i++) {
    if (integer % i === 0) {
      divisorsList.push(i);
    };
  };
  
  if (divisorsList.length === 0) {
    return `${integer} is prime`;
  }

  return divisorsList;
};