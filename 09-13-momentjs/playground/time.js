var moment = require('moment');

// Jan 1st 1970 00:00:10 am

var date = '';
// date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

date = moment();
console.log(date.format());
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('YYYY/MM/DD'));
date.add(20, 'days');
console.log(date.format('YYYY/MM/DD'));

date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

// var date = moment();
// console.log(date.format('h:mm a'))
