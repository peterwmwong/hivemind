var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus'], function(Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    renderChat: function(_arg) {
      var msg, name;
      name = _arg.name, msg = _arg.msg;
      this.$el.append((function() {
        return _(".chat" + (Bus.username === name && '.self' || ''), _('span.from', name), _('span.msg', msg));
      })());
      return $(window).scrollTop(999999);
    },
    afterRender: function() {
      return Bus.bind({
        loginSuccess: __bind(function(_arg) {
          var chats, msg, _i, _len, _results;
          chats = _arg.chats;
          if (chats) {
            _results = [];
            for (_i = 0, _len = chats.length; _i < _len; _i++) {
              msg = chats[_i];
              _results.push(this.renderChat(msg));
            }
            return _results;
          }
        }, this),
        chat: __bind(function(data) {
          return data && this.renderChat(data);
        }, this),
        chatSent: __bind(function(_arg) {
          var msg;
          msg = _arg.msg;
          return msg && this.renderChat({
            name: Bus.username,
            msg: msg
          });
        }, this)
      });
    }
  };
});