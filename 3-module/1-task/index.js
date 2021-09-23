let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

function namify(users) {
  let newArr = [];
  for (let i = 0; i < users.length; i++) {
    newArr.push(users[i].name);
  }
  return newArr;
}

let names = namify(users);

