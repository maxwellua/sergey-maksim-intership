function divisors(integer) {
  const divisorsList = [];
 
  for (let i = 2; i <= integer - 1; i++) {
    if (!(integer % i)) {
      divisorsList.push(i);
    };
  };
  
  if (!divisorsList.length) {
    return `${integer} is prime`;
  }

  return divisorsList;
};