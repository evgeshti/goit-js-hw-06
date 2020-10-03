// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

import users from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((balanceSum, user) => balanceSum + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
