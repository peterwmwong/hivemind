var connect, handlers, io, path, port, resolve, server, use, users, uuid, _i, _len, _ref;
resolve = require('path').resolve;
server = (connect = require('connect'))();
uuid = require('node-uuid');
port = process.env.PORT || 8888;
path = "" + __dirname + "/client/";
_ref = [
  connect.favicon(), connect.static(path, {
    maxAge: 1,
    hidden: true
  })
];
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  use = _ref[_i];
  server.use(use);
}
server.listen(port);
console.log("'serving " + path + " on " + (server.address().port));
users = {};
io = require('socket.io').listen(server);
io.configure(function() {
  return io.set('log level', 1);
});
handlers = (function() {
  var k, v, _ref2, _results;
  _ref2 = (function() {
    return {
      login: function(newName) {
        return this.name = newName;
      },
      newChat: function(data) {
        console.log("newChat[" + this.uid + "]: " + (data != null ? data.msg : void 0));
        return this.socket.broadcast.emit('newChat', {
          msg: data.msg,
          uid: this.uid,
          name: this.name
        });
      }
    };
  })();
  _results = [];
  for (k in _ref2) {
    v = _ref2[k];
    _results.push([k, v]);
  }
  return _results;
})();
io.sockets.on('connection', function(socket) {
  var ctx, k, uid, _j, _len2, _results;
  ctx = users[uid = uuid()] = {
    uid: uid,
    socket: socket
  };
  socket.emit('uuid', uid);
  _results = [];
  for (_j = 0, _len2 = handlers.length; _j < _len2; _j++) {
    k = handlers[_j];
    _results.push(socket.on(k[0], k[1].bind(ctx)));
  }
  return _results;
});