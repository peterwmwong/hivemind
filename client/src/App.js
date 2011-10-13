var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus', 'cell!Login', 'cell!ChatLog', 'cell!StatusBar'], function(Bus, Login, ChatLog, StatusBar) {
  return {
    init: function() {
      var event, _i, _len, _ref, _ref2, _results;
      this.socket = io.connect(((_ref = window.hivemind) != null ? _ref.socketurl : void 0) || "http://96.126.114.123:80");
      _ref2 = ['chat', 'userLoggedIn', 'userLoggedOut'];
      _results = [];
      for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
        event = _ref2[_i];
        _results.push(this.socket.on(event, (function(event) {
          return function(data) {
            return Bus.trigger((data.type = event) && data);
          };
        })(event)));
      }
      return _results;
    },
    render: function(_) {
      return [
        _(Login, {
          onLogin: __bind(function(name) {
            return this.socket.emit('login', (Bus.set({
              username: name
            })) || name, __bind(function(data) {
              if (!data.error) {
                this.$('.Login').toggle(false);
                return Bus.trigger((data.type = 'loginSuccess') && data);
              } else {
                return Bus.trigger('loginFail');
              }
            }, this));
          }, this)
        }), _(ChatLog), _(StatusBar), _('.arrow', '>'), _('input.chatInput')
      ];
    },
    on: {
      'keypress input.chatInput': function(_arg) {
        var $target, data, target, which;
        which = _arg.which, target = _arg.target;
        if (Bus.username) {
          if (which === 13 && (data = {
            msg: ($target = $(target)).val()
          }).msg) {
            $target.val('');
            try {
              return this.socket.emit('chat', (data.name = Bus.username) && data, function(ok) {
                return Bus.trigger((data.type = 'chatSent') && data);
              });
            } catch (_e) {}
          }
        }
      }
    }
  };
});