var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus'], function(Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    renderIncomingChat: function(name, msg, uid) {
      return this.$el.append((function() {
        return _('.chat', _('span.from', uid), _('span.msg', msg));
      })());
    },
    afterRender: function() {
      return Bus.bind({
        'incomingChat': __bind(function(_arg) {
          var msg, name, uid;
          msg = _arg.msg, uid = _arg.uid, name = _arg.name;
          return msg && this.renderIncomingChat(name, msg, uid);
        }, this)
      });
    }
  };
});