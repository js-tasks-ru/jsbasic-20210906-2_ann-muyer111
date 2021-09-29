function camelize(str) {
  let arr = str.split('-');

  let result = arr.map((item, index) => {
    if (!item || (index === 0 && item !== '')) {
      return item;
    }
    return `${item[0].toUpperCase()}${item.slice(1)}`;
  });

  return result.join('');
}
