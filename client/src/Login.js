var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['AppModel', 'Bus'], function(AppModel, Bus) {
  var doLogin;
  return {
    render: function(_) {
      return [
        _('.greet', 'Who are ', _('span', 'you'), '?'), _('.inputGroup', _('input.name', {
          placeholder: 'Name...'
        }), _('input.submit', {
          type: 'button',
          value: 'Login'
        }))
      ];
    },
    afterRender: function() {
      this.$inputName = this.$('input.name');
      return setTimeout((__bind(function() {
        return this.$inputName.focus();
      }, this)), 0);
    },
    on: {
      'click input.submit': doLogin = function() {
        var name;
        if (name = this.$inputName.val()) {
          return Bus.emit('login', name, __bind(function(data) {
            if (!data.error) {
              AppModel.set({
                username: name
              });
              return AppModel.trigger((data.type = 'login') && data);
            }
          }, this));
        }
      },
      'keypress input.name': function(_arg) {
        var which;
        which = _arg.which;
        if (which === 13) {
          return doLogin.call(this);
        }
      }
    }
  };
});