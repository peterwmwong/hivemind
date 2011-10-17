var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['AppModel', 'Bus', 'cell!Login', 'cell!ChatLog', 'cell!StatusBar'], function(AppModel, Bus, Login, ChatLog, StatusBar) {
  return {
    render: function(_) {
      return [_(Login), _(ChatLog), _(StatusBar), _('.wrapForFF_see_579776', _('#chatInputGroup', _('p.arrow', '>'), _('input#chatInput')))];
    },
    afterRender: function() {
      this.$input = this.$('#chatInput');
      return AppModel.on({
        login: __bind(function(_arg) {
          var name;
          name = _arg.name;
          this.$('.Login').toggle(false);
          this.$('.arrow').html("" + name + " >");
          return setTimeout((__bind(function() {
            return this.$input.focus();
          }, this)), 0);
        }, this),
        logout: __bind(function() {
          return this.$('.Login').toggle(true);
        }, this)
      });
    },
    on: {
      'keypress #chatInput': function(_arg) {
        var data, which;
        which = _arg.which;
        if (AppModel.username) {
          data = {
            msg: this.$input.val(),
            name: AppModel.username
          };
          if (which === 13 && data.msg) {
            this.$input.val('');
            return Bus.emit('chat', data, function(_arg2) {
              var date, error;
              error = _arg2.error, date = _arg2.date;
              data.type = 'newChat';
              data.date = date;
              return AppModel.trigger(data);
            });
          }
        }
      }
    }
  };
});