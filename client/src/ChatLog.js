var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus'], function(Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    renderIncomingChat: function(msg) {
      return this.$el.append(_('.chat', msg));
    },
    afterRender: function() {
      return Bus.bind({
        'incomingChat': __bind(function(_arg) {
          var data;
          data = _arg.data;
          return data.msg && renderIncomingChat(data.msg);
        }, this)
      });
    }
  };
});