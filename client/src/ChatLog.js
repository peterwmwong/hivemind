var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus'], function(Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    renderChat: function(_arg) {
      var msg, name, type, uid;
      type = _arg.type, name = _arg.name, msg = _arg.msg, uid = _arg.uid;
      this.$el.append((function() {
        return _(".chat" + (type === 'newSelfChat' && '.self' || ''), _('span.from', uid), _('span.msg', msg));
      })());
      return $(window).scrollTop(999999);
    },
    afterRender: function() {
      var handleChat;
      handleChat = __bind(function(data) {
        return data && this.renderChat(data);
      }, this);
      return Bus.bind({
        incomingChat: handleChat,
        newSelfChat: handleChat
      });
    }
  };
});