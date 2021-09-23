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

const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

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

getMinMax(inputData);
