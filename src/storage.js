// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//     // console.log(serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = (key) => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// const remove = (key) => {
//   try {
//     localStorage.remove(key);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// const obj1 = {
//   color: "#ff00ff",
//   fontSize: "14px",
// };
// const obj2 = {
//   color: "#ff004f",
//   fontSize: "12px",
// };

// save("obj1", obj1);
// save("obj2", obj2);
// const savedObj1 = load("obj1");
// localStorage.removeItem("obj1");

// console.log(JSON.parse(localStorage.getItem("obj2")), savedObj1, obj1);

// export default {
//   save,
//   load,
//   remove,
// };
// console.log({ save, load, remove });

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

fetch('https://pokeapi.co/api/v2/pokemon/11')
  .then(r => console.log(r))
  // .then(p => console.log(p))
  .catch(e => console.log(e));
