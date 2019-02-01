function Calculator(vatRate){ 
  
  this.getNet = function(grossPrice){
    return +(grossPrice/(vatRate/100 + 1)).toFixed(2);  
  };
  
  this.getVat = function(grossPrice){
    return +((grossPrice * vatRate/100)/(vatRate/100 + 1)).toFixed(2);
  };
};
