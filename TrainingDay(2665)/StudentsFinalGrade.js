function finalGrade( grade, projects ){
  if ( grade > 90 || projects > 10 ) {
    return 100;  
  };
  
  if ( grade > 75 && projects >= 5 ) {
    return 90;
  };

  if ( grade > 50 && projects >= 2 ) {
    return 75;
  };
  
  return 0;
};
