// # w/o Arrow Function 
// var square = (x) => {
//   var result = x * x;
//   return result;
// }

var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Andrew',
  sayHi: (a,b) => {
    console.log(`Hi!`, a, b);
  },
  sayHiAlt (a,b) {
    console.log(`Hi!`, this.name, a, b);
  }
};

// var user = {
//   name: 'Andrew',
//   sayHi: () => {
//     console.log(arguments);
//     console.log(`Hi. I'm ${this.name}`);
//   },
//   sayHiAlt () {
//     console.log(arguments);
//     console.log(`Hi. I'm ${this.name}`);
//   }
// };

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2);
