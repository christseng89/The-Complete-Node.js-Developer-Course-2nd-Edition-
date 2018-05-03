console.log('Starting Async app');

setTimeout(() => {
  console.log('First setTimeout');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

setTimeout(() => {
  console.log('Third setTimeout');
}, 1000);

console.log('Finishing up');
