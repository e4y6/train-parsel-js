// const promise = new Promise((resolve, reject) => {
//   const canBeResolved = Math.random() >= 0.5;
//   if (canBeResolved) {
//     resolve("Ok!");
//   }
//   reject("Oops!");
// });
// promise.then(onSuccess, onError);
// function onSuccess(x) {
//   console.log("on success ->", x);
// }
// function onError(y) {
//   console.log("on error ->", y);
// }

// const promise = new Promise((resolve, reject) => {
//   const canBeFulfilled = Math.random() < 0.5;
//   setTimeout(() => {
//     canBeFulfilled ? resolve("Ok!") : reject("Oops!");
//   }, 777);
// });
// console.log(promise);
// promise
//   .then((a) => {
//     // throw new Error("Error in the 1");
//     console.log(a, "Success 1 !");
//     return 2;
//   })
// .then((b) => {
//   // throw new Error("Error in the 2");
//   console.log(b, "success 2!");
//   return 3;
// })
// .then((b) => {
//   // throw new Error("Error in the 3");
//   console.log(b, "success 3!");
//   return 7;
// })
// .then((r) => {
//   throw new Error("Error in the 4");
//   console.log(r, "success 4!");
// })
// .catch((error) => console.log(error))
// .finally(() => console.log("At any case!"));

// const makeOrder = (dish) => {
//   const DELAY = 777;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() >= 0.5;
//     setTimeout(() => {
//       passed
//         ? resolve(`There's your ${dish}!`)
//         : reject(`There's no product for your ${dish}!`);
//     }, DELAY);
//   });
// };
// const onOrderConfirmed = (result) => {
//   console.log("On success:", result);
// };
// const onOrderDenied = (e) => {
//   console.log("On error:", e);
// };
// makeOrder("pie").then(onOrderConfirmed).catch(onOrderDenied);

// const makeOrder = (dish) => {
//   return Promise.resolve(`There's your ${dish}!`);
// };
// makeOrder("pie").then((res) => console.log(res));

// const fetchPokemonByID = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };
// const onFetchSuccess = p => console.log('success:', p.name, p);

// const onFetchError = e => console.log('error:', e);

// fetchPokemonByID(1).then(onFetchSuccess).catch(onFetchError);
