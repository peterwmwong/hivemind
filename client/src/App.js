define(['Bus', 'cell!ChatLog', 'cell!StatusBar'], function(Bus, ChatLog, StatusBar) {
  var k, socket, v, _ref;
  socket = io.connect();
  _ref = (function() {
    return {
      init: function(_arg) {
        var msgs, uuid;
        uuid = _arg.uuid, msgs = _arg.msgs;
        return console.log(uuid, msgs);
      },
      newChat: function(data) {
        return Bus.trigger((function() {
          data.type = 'incomingChat';
          return data;
        })());
      }
    };
  })();
  for (k in _ref) {
    v = _ref[k];
    socket.on(k, v);
  }
  return {
    render: function(_) {
      return [_(ChatLog), _(StatusBar), _('.arrow', '>'), _('input.chatInput')];
    },
    on: {
      'keypress input.chatInput': function(_arg) {
        var $target, data, target, which;
        which = _arg.which, target = _arg.target;
        if (which === 13 && (data = {
          msg: ($target = $(target)).val()
        }).msg) {
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