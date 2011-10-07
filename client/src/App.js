define(['Bus', 'cell!ChatLog', 'cell!StatusBar'], function(Bus, ChatLog, StatusBar) {
  var socket;
  socket = io.connect();
  socket.on('newChat', function(data) {
    data.type = 'incomingChat';
    return Bus.trigger(data);
  });
  return {
    render: function(_) {
      return [_(ChatLog), _(StatusBar), _('.arrow', '>'), _('input.chatInput')];
    },
    on: {
      'keypress input.chatInput': function(_arg) {
        var $target, data, target, which;
        which = _arg.which, target = _arg.target;
        if (which === 13) {
          data = {
            msg: ($target = $(target)).val()
          };
          $target.val('');
          return socket.emit('newChat', data);
        }
      }
    }
  };
});