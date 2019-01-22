function stringy(size) {
  let result = '';
 
  if (size === 0) {
    return result;
  }; 
  
  result = '10'.repeat(size/2);
  
  if (size % 2 !== 0) {
    result += 1;
  };

  return result;
};
