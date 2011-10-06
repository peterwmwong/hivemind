(function() {
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
  io.configure(function() {
    return io.set('log level', 1);
  });
  io.sockets.on('connection', function(socket) {
    var k, v, _ref2;
    _ref2 = (function() {
      return {
        evt: function() {},
        evt2: function() {}
      };
    })();
    for (k in _ref2) {
      v = _ref2[k];
      socket.on(k, v);
    }
    return socket.on('my other event', function(data) {
      return console.log(data);
    });
  });
}).call(this);
