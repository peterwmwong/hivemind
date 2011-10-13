var chatBuffer, chatHandler, connect, handlers, io, path, port, server, use, userHandler, users, _i, _len, _ref;
server = (connect = require('connect'))();
handlers = [userHandler = require('./UserHandler'), chatHandler = require('./ChatHandler')];
port = process.env.PORT || 8888;
path = "" + __dirname + "/../client/";
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
chatBuffer = [];
users = {};
io = require('socket.io').listen(server);
io.configure(function() {
  return io.set('log level', 1);
});
io.sockets.on('connection', function(socket) {
  var ctx, event, handler, method, _j, _len2, _results;
  ctx = {
    chatBuffer: chatBuffer,
    users: users,
    socket: socket
  };
  _results = [];
  for (_j = 0, _len2 = handlers.length; _j < _len2; _j++) {
    handler = handlers[_j];
    _results.push((function() {
      var _ref2, _results2;
      _ref2 = handler.on;
      _results2 = [];
      for (event in _ref2) {
        method = _ref2[event];
        _results2.push(socket.on(event, method.bind(ctx)));
      }
      return _results2;
    })());
  }
  return _results;
});