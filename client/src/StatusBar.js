var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus'], function(Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    render: function(_) {
      var name;
      return [
        _('.onlineUsers', _('.list', (function() {
          var _i, _len, _ref, _results;
          _ref = ['jkaplan', 'dlavin', 'pwong', 'rgerry', 'cmaroney'];
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            name = _ref[_i];
            _results.push(_('span.user', name));
          }
          return _results;
        })()), _('.label', 'online'))
      ];
    },
    afterRender: function() {
      return Bus.bind({
        'user.logout': __bind(function(_arg) {
          var data;
          data = _arg.data;
          return this.$('.list').append(_('span.user', data));
        }, this)
      });
    }
  };
});