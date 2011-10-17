var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['AppModel', 'Bus'], function(AppModel, Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    render: function() {
      return [_('.onlineUsers', _('.list'), _('.label', 'online'))];
    },
    afterRender: function() {
      var $list, addUser, event, fn, _ref, _results;
      $list = this.$('.list');
      addUser = function(_arg) {
        var name;
        name = _arg.name;
        return $list.append(_('span.user', {
          'data-user': name
        }, name));
      };
      AppModel.on({
        login: function(_arg) {
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
      _ref = (function() {
        return {
          userLoggedIn: addUser,
          userLoggedOut: __bind(function(_arg) {
            var name;
            name = _arg.name;
            return this.$(".list .user[data-user='" + name + "']").remove();
          }, this)
        };
      })();
      _results = [];
      for (event in _ref) {
        fn = _ref[event];
        _results.push(Bus.on(event, fn));
      }
      return _results;
    }
  };
});