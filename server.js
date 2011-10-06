var connect, io, path, port, resolve, server, use, _i, _len, _ref;
resolve = require('path').resolve;
server = (connect = require('connect'))();
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
io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
  socket.emit('news', {
    hello: 'world'
  });
  return socket.on('my other event', function(data) {
    return console.log(data);
  });
});