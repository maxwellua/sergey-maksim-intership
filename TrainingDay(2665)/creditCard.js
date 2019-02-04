function getIssuer(number) {
  const cardNum = number.toString();
  //checking for AMEX
  if (cardNum[0] == '3') {
    if (cardNum[1] == '4' || cardNum[1] == '7') {
      if (cardNum.length == 15) {
        return 'AMEX';
      }
    }
  };
  //checking for Discover
  if (cardNum.slice(0,3) == '6011') {
    if (cardNum.length == 16) {
      return 'Discover';
    }
  };
  //checking for VISA
  if (cardNum[0] == '4') {
    if (cardNum.length == 13 || cardNum.length == 16) {
      return 'VISA';
    };
  };
  //checking for Mastercard
  if (cardNum[0] == '5') {
    if (cardNum[1] == '1' 
     || cardNum[1] == '2'
     || cardNum[1] == '3'
     || cardNum[1] == '4'
     || cardNum[1] == '5') {
      if (cardNum.length == 16) {
        return 'Mastercard';
      }
    }
  };
  
  return 'Unknown';
};