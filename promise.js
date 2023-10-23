const DB = [];

function register(user) {
  const result = saveDB(user)
    .then(sendMail)
    .then(getResult)
    .catch((err) => new Error(err));
  console.log(result);
  return result;
}

function saveDB(user) {
  const oldDBSize = DB.length + 1;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("save DB error"));
    }
  });
}

function sendMail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

const myUser = {
  email: "abc@test.com",
  password: "1234",
  name: "abc",
};

// const result = register(myUser);
// result.then(console.log);

const allResult = Promise.all([
  saveDB(myUser),
  sendMail(myUser),
  getResult(myUser),
]);

allResult.then(console.log);
