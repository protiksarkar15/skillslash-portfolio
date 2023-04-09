// write a func to generate a random value after 5 sec.
// it should return success if number > 5 else throw error.

function checkNumber() {
  var randomNo = 0;

  const numberPromise = new Promise((success, reject) => {
    setTimeout(() => {
      randomNo = Math.floor(Math.random() * 10) + 1;
      console.log(randomNo);
      if (randomNo >= 5) {
        success("Number >= 5");
      } else {
        reject("Number < 5");
      }
    }, 5000);
  });

  numberPromise
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

checkNumber();
