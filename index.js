
// 1. Сделайте запрос по адресу https://reqres.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров у которых в поле last_name не менее 5ти символов
// fetch('https://reqres.in/api/users?page=1')
// .then((reqObj) => {
//     return reqObj.json();
// })
// .then(({ data }) => {
//     const filteredUsers = data.filter((user) => user.last_name.length >= 5);
//     console.log(filteredUsers);
//   })

// 2. Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные

// fetch('https://reqes.in/api/users?page=1')
// .then((reqObj) => {
//     return reqObj.json()})
//     .catch((error) => {
//         console.log('error', error);
//       });
