const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should add second user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    var user = {
      id: '123#2',
      name: 'Andrew#2',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    console.log(users);
    expect(users.users[1]).toEqual(user);
  });

});
