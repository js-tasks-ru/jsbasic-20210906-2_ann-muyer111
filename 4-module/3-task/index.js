function highlight(table) {
  let statusIndex = 0;
  let genderIndex = 0;
  let ageIndex = 0;

  Array.from(table.rows[0].cells).forEach((cell, cellIndex) => {
    switch (cell.innerText) {
    case 'Status':
      statusIndex = cellIndex;
      break;
    case 'Gender':
      genderIndex = cellIndex;
      break;
    case 'Age':
      ageIndex = cellIndex;
      break;
    }
  });

  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    let status = null;

    if (row.cells[statusIndex].dataset.available) {
      status = row.cells[statusIndex].dataset.available;
    }

    if (typeof status === 'string') {
      row.classList.add(status === 'true' ? 'available' : 'unavailable');
    } else if (status === null) {
      row.setAttribute('hidden', true);
    }

    row.classList.add(row.cells[genderIndex].innerText === 'm' ? 'male' : 'female');

    if (Number(row.cells[ageIndex].innerText) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
