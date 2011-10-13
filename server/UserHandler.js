var isValidName, login, removeUser;
module.exports = {
  _isValidName: isValidName = function(name) {
    return !!(/^\w+$/.exec(name));
  },
  on: {
    login: login = function(name, cb) {
      if (!this.name) {
        if (!name || !isValidName(name)) {
          return cb({
            error: 'invalidName'
          });
        } else if (this.users[name] === true) {
          return cb({
            error: 'nameTaken'
          });
        } else {
          this.users[this.name = name] = true;
          this.socket.removeAllListeners('login');
          this.socket.broadcast.emit('userLoggedIn', {
            name: name
          });
          return cb({
            name: name,
            users: Object.keys(this.users),
            chats: this.chatBuffer
          });
        }
      }
    },
    disconnect: removeUser = function() {
      var name;
      name = this.name;
      delete this.users[name];
      delete this.name;
      return this.socket.broadcast.emit('userLoggedOut', {
        name: name
      });
    },
    logout: function() {
      removeUser.call(this);
      return this.socket.on('login', login.bind(this));
    }
  }
};