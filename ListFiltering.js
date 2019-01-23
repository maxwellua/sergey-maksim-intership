function filter_list (notFilteredList) {
  return notFilteredList.filter( item => typeof item === 'number');
};
