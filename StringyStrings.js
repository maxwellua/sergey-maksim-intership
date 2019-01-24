function stringy(size) {
  let result = '';
 
  if (!size) {
    return result;
  }; 
  
  result = '10'.repeat(size/2);
  
  if (size % 2) {
    return result + '1';
  };

  return result;
};
