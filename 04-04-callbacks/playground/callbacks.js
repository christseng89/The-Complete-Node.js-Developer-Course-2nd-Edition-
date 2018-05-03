var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  };

  console.log("Callback w/o timeout");
  callback(user);

  setTimeout(() => {
    callback(user);
    console.log("Callback w timeout...");
  }, 3000);
  console.log("Hi!");
};

getUser(31, (userObject) => {
  console.log(userObject);
});
