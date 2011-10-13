var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus'], function(Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    render: function(_) {
      return [_('.onlineUsers', _('.list'), _('.label', 'online'))];
    },
    afterRender: function() {
      var $list, addUser;
      $list = this.$('.list');
      return Bus.bind({
        userLoggedIn: addUser = function(_arg) {
          var name;
          name = _arg.name;
          return $list.append(_('span.user', {
            'data-user': name
          }, name));
        },
        userLoggedOut: __bind(function(_arg) {
          var name;
          name = _arg.name;
          return this.$(".list .user[data-user='" + name + "']").remove();
        }, this),
        loginSuccess: function(_arg) {
          var n, name, users, _i, _len, _results;
          name = _arg.name, users = _arg.users;
          $list.html('');
          _results = [];
          for (_i = 0, _len = users.length; _i < _len; _i++) {
            n = users[_i];
            if (name !== n) {
              _results.push(addUser({
                name: n
              }));
            }
          }
          return _results;
        }
      });
    }
  };
});