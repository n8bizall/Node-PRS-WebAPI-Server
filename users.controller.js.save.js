module.exports = function() {
  this.users = [
    { id: 1, firstname: 'Greg', lastname: 'Doud', username: 'gpdoud', password: 'radioham' },
    { id: 2, firstname: 'George', lastname: 'Washington', username: 'gwashington', password: 'potus' },
    { id: 3, firstname: 'Abraham', lastname: 'Lincoln', username: 'alincoln', password: 'potus' },
    { id: 4, firstname: 'Thomas', lastname: 'Jefferson', username: 'tjefferson', password: 'potus' },
    { id: 5, firstname: 'John', lastname: 'Adams', username: 'jadams', password: 'potus' }
  ]
  this.list = function() {
    return this.users;
  }
  this.get = function(id) {
    for(user of this.users) {
      if(user.id === id) {
        return user;
      }
    }
    return null;
  }
  this.create = function(user) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }
  this.change = function(user) {
    var user2 = this.get(user.id);
    if(user2 == null) {
      return -1;
    }
    user2.firstname = user.firstname;
    user2.lastname = user.lastname;
    user2.username = user.username;
    user2.password = user.password;
  }
  this.remove = function(user) {
    var user2 = this.get(user.id);
    if(user2 == null) {
      return -1;
    }
    for(idx = 0; idx < this.users.length; idx++) {
      var userx = this.users[idx];
      if(userx.id === user.id) {
        this.users.splice(idx, 1);
      }
    }
  }
}