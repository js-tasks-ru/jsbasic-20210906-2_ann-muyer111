function camelize(str) {
  let arr = str.split('-');
  let shouldSkipFirstWord = arr[0] !== '';

  let result = arr.map((item) => {
    if (!item) {
      return '';
    }
    if (shouldSkipFirstWord) {
      shouldSkipFirstWord = false;
      return item;
    }
    return `${item[0].toUpperCase()}${item.slice(1)}`;
  });

  return result.join('');
}

console.log('!!!', camelize('background-color'));
console.log('!!!', camelize('-webkit-transition'));

