// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// ==================================================================
// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

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
