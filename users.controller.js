module.exports = function() {

  const usercopy = require("./usercopy.js");

  // constructor function
  const FS = require("fs");
  var users_raw = FS.readFileSync("users.json");
  this.users = JSON.parse(users_raw);

  // flush function
  this.flush = function() {
    FS.writeFileSync("users.json", JSON.stringify(this.users));
  }
  
  // list() function
  this.list = function() {
    return this.users;
  }
  
  // get(id) function
  this.get = function(Id) {
    for(user of this.users) {
      if(user.Id === Id) {
        return user;
      }
    }
    return null;
  }
  
  // create(user) function
  this.create = function(user) {
    user.Id = this.users.length + 1;
    this.users.push(user);
    this.flush();
  }
  
  // change(user) function
  this.change = function(user) {
    var user2 = this.get(user.Id);
    if(user2 == null) {
      return -1;
    }
    usercopy(user, user2);
    this.flush();
  }
  
  // remove(user) function
  this.remove = function(user) {
    var user2 = this.get(user.Id);
    if(user2 == null) {
      return -1;
    }
    for(idx = 0; idx < this.users.length; idx++) {
      var userx = this.users[idx];
      if(userx.Id === user.Id) {
        this.users.splice(idx, 1);
      }
    }
    this.flush();
  }
}