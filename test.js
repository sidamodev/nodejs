function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toLowerCase());
  });
}

function canIGame(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") resolve("doGame!");
    else reject(new Error("don'tGame!"));
  });
}

myWork("DONE")
  .then((res) => {
    console.log(res);
    return "done";
  })
  .then(canIGame)
  .then(console.log)
  .catch(console.log);
