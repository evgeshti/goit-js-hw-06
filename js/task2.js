// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
