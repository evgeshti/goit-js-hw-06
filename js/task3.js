// Задание 3
// Получить массив имен пользователей по полу (поле gender).

import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(users => users.gender === gender).map(user => user.email);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
