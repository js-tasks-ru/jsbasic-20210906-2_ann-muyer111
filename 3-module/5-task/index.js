function compareNumeric(a, b) {
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
}

function getMinMax(str) {
  const arr = str.split(' ')
    .filter(item => isFinite(item))
    .map((item) => Number(item))
    .sort(compareNumeric);

  return {
    min: arr[0],
    max: arr[arr.length - 1],
  };
}
