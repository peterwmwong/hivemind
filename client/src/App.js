define(['Bus', 'cell!ChatLog', 'cell!StatusBar'], function(Bus, ChatLog, StatusBar) {
  var socket;
  socket = io.connect();
  socket.on('newChat', function(data) {
    return Bus.trigger((function() {
      data.type = 'incomingChat';
      return data;
    })());
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
          try {
            Bus.trigger({
              type: 'newSelfChat',
              msg: data.msg
            });
          } catch (_e) {}
          try {
            return socket.emit('newChat', data);
          } catch (_e) {}
        }
      }
    }
  };
});