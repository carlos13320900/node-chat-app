class Users {

  /** @region_snippet_Constructor */
  constructor() {
    this.users = [];
  }
  /** @endregion */

  /** @region_snippet_Create */
  addUser (id, name, room) {
    var user = { id, name, room };
    this.users.push(user);
    return user;
  }
  /** @endregion */

  /** @region_snippet_Delete */
  removeUser (id) {
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }

    return user;
  }
  /** @endregion */

  /** @region_snippet_GetByRoom */
  getUserList (room) {
    var users = this.users.filter(user => user.room === room);
    var namesArray = users.map(user => user.name);

    return namesArray;
  }
  /** @endregion */

  /** @region_snippet_GetById */
  getUser (id) {
    return this.users.filter(user => user.id === id)[0];
  }
  /** @endregion */
}

module.exports = { Users };
