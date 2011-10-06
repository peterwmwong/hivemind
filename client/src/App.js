define(['Bus', 'cell!ChatLog', 'cell!StatusBar'], function(Bus, ChatLog, StatusBar) {
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
      return [_(ChatLog), _(StatusBar), _('.arrow', '>'), _('input.chatInput')];
    }
  };
});