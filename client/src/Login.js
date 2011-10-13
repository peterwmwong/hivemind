var doLogin;
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
    return this.$inputName = this.$('input.name');
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