define([], function() {
  var socket;
  socket = io.connect();
  socket.on('news', function(data) {
    console.log(data);
    return socket.emit('my other event', {
      my: 'data'
    });
  });
  return {
    render: function(_) {
      return ["Hellow"];
    }
  };
});