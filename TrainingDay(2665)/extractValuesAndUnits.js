function valAndUnits(value) {
  return {val: parseFloat(value),
          units: value.replace(/[^a-z%]+/i, ''),
        };
}
