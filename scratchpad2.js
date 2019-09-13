//
// const lessThanFour = array => {
//   let newArr = [];
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] < 4) {
//       newArr.push(array[i]);
//     } else break
//   };
//   return newArr;
// };
//
// lessThanFour(arr);

// const arr = [1,2,3,4,5,6];
//
// const lessThanFive = array => {
//   for(val of array) {
//     if(val < 5) {
//       console.log(val);
//     } else break;
//   };
// };
// lessThanFive(arr);

// class Animal {
//   noPhotosyntheses() {return true}
// };
//
// class Dog {
//   // constructor(animal) {
//   //   this.animal = animal
//   // }
//
//   wagsPerMinute() {return 70}
// };
//
//
// class ProxyDog {
//   static create() {
//     // const animal = new Animal();
//     const dog = new Dog();
//     const proxyDog = new ProxyDog();
//     return new Proxy(proxyDog, {
//       get: function(target, property) {
//         return proxyDog[property] || dog[property];
//       }
//     });
//   }
//
//   constructor(dog) {
//     this.dog = dog
//   }
// }
//
// const proxyDog = ProxyDog.create();
// console.log(proxyDog.wagsPerMinute());

const obj = {name: 'me'};
let test = obj.constructor === Object;
console.log(test);
let test2 = Object.entries(obj).length > 0;
console.log(test2);
