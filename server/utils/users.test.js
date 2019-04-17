const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Carlos',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Citlalli',
      room: 'React course'
    }, {
      id: '3',
      name: 'Isela',
      room: 'Node course'
    }]
  });

  /** @region_snippet_TestAddUser */
  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Carlos',
      room: 'Node course'
    };

    var response = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
  /** @endregion */

  /** @region_snippet_TestGetByRoom */
  it('Should return names for users which are in the same room', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual([ 'Carlos', 'Isela' ]);
  });
  /** @endregion */

  /** @region_snippet_TestDelete */
  it('Should delete user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });
  /** @endregion */

  /** @region_snippet_TestNotDelete */
  it('Should not delete user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });
  /** @endregion */

  /** @region_snippet_TestGetById */
  it('Should get user by id', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });
  /** @endregion */

  /** @region_snippet_TestNoGetUserByID */
  it('Should not get user by id', () => {
    var userId = '98'
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });
  /** @endregion */
});
