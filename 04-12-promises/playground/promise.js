var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey. It worked!')
    reject('Unable to fulfill promise')
  }, 2000)
})

// console.log(somePromise)

somePromise.then((message) => {
  console.log('Success: ', message)
}, (errorMessage) => {
  console.log('Error: ', errorMessage)
})

// var promise1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 100, 'foo')
// })

// promise1.then((message) => {
//   console.log('Success:', message)
// },
// (errorMessage) => {
//   console.log('Fail:', errorMessage)
// })

// console.log(promise1)
// expected output: [object Promise]