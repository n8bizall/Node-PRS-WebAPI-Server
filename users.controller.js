module.exports = function() { 

  const usercopy = require("./usercopy.js");
  const jsonrc = require("./jsonrc.js");

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
    return new jsonrc(200, "OK", this.users); 
  }
  
  // get(id) function
  this.get = function(Id) {
    for(user of this.users) {
      if(user.Id === Id) {
        return new jsonrc(200, "OK", user);
      }
    }
    return null;
  }
  
  // create(user) function
  this.create = function(user) {
    user.Id = this.users.length + 1;
    this.users.push(user);
    this.flush();
    return new jsonrc(200, "OK", null);
  }
  
  // change(user) function
  this.change = function(user) {
    var user2 = this.get(user.Id);
    if(user2 == null) {
      return new jsonrc(204, "ERROR", "Not found.")
    }
    usercopy(user, user2);
    this.flush();
    return new jsonrc(200, "OK", null);
  }
  
  // remove(user) function
  this.remove = function(user) {
    var user2 = this.get(user.Id);
    if(user2 == null) {
      return new jsonrc(204, "ERROR", "Not found.")
    }
    for(idx = 0; idx < this.users.length; idx++) {
      var userx = this.users[idx];
      if(userx.Id === user.Id) {
        this.users.splice(idx, 1);
      }
    }
    this.flush();
    return new jsonrc(200, "OK", null);
  }
}