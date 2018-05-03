// # w/o Arrow Function 
// var square = (x) => {
//   var result = x * x;
//   return result;
// }

var square = x => x * x;
console.log(square(9));
console.log('Arg 3: ', arguments[3], '\n');

var user = {
  name: 'Andrew',
  sayHi: (a, b) => {
    console.log(`Hi!`, a, b);
  },
  sayHiAlt(a, b) {
    console.log(`Hi!`, this.name, a, b, '\n');
  }
};

var user1 = {
  name: 'Andrew',
  sayHi: () => {
    console.log('SayHi: ', arguments[3]);
    console.log(`Hi. I'm ${this.name}`, '\n');
  },
  sayHiAlt() {
    console.log('SayHiAlt: ', arguments[3]);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2);

user1.sayHi();
user1.sayHiAlt();