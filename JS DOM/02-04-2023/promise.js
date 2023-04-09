const myPromise = new Promise((success, reject) => {
    setTimeout(() => success('Yes I\'m Done'), 5000);
   // setTimeout(() => reject('No I failed'), 5000);
});

myPromise.then((data) => console.log(data))
.catch((err) => console.log(err));



const fetchPromise = new Promise((success, reject) => {
  fetch("https://dummyjson.com/todo/user/15", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 404) {
        throw new Error("EndPoint doesn't exist");
      }
      return res.json();
    })
    .then((data) => success(data))
    .catch((err) => reject(err));
});

fetchPromise
  .then((data) => console.log("Success >", data))
  .catch((err) => console.log("Error >", err));