function pidgeyCalc ( pidgeys, candy ) {
  let levelups = 0;

  while ( pidgeys > 0 ) {
    if (candy > 11) {
      pidgeys--;
      candy -= 11;
      levelups++;
    } else {
      pidgeys--;
      candy++;
    };  
  };

  return levelups*500;
};
