var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  }

  console.log("Callback w/o timeout")
  callback(user)

  setTimeout(() => {
    user.age = 21
    user.id = 19
    callback(user)
    console.log("Callback w timeout 1 sec...")  
  }, 1000)

  setTimeout(() => {
    user.name = 'Andrew'
    callback(user)
    console.log("Callback w timeout 2 sec...")
  }, 3000)
  console.log("Hi!")
}

getUser(31, (userObject) => {
  console.log(userObject)
})
