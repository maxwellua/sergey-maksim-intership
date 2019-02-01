function findShort(string) {
  return string.split(' ').reduce((shortest, word) => {
    if (word.length < shortest) {
      shortest = word.length;
    };
    return shortest;
  }, 1000);
};
