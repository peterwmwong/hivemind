var doLogin;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define({
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
        return this.options.onLogin(name);
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
});