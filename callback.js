const DB = [];

function register(user) {
  return saveDB(user, function (user) {
    return sendMail(user, function (user) {
      return getResult(user);
    });
  });
}

function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

function sendMail(user, callback) {
  console.log(`email to ${user.email}`);
  return callback(user);
}

function getResult(user) {
  return `success register ${user.name}`;
}

const result = register({
  email: "abc@test.com",
  password: "1234",
  name: "abc",
});

console.log(result);
