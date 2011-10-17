define [
  'AppModel'
  'Bus'
], (AppModel,Bus)->

  render: (_)-> [
    _ '.greet',
      'Who are '
      _ 'span', 'you'
      '?'
    _ '.inputGroup',
      _ 'input.name', placeholder: 'Name...'
      _ 'input.submit', type: 'button', value: 'Login'
  ]

  afterRender: ->
    @$inputName = @$ 'input.name'
    setTimeout (=> @$inputName.focus()), 0

  on:
    'click input.submit': doLogin = ->
      if name = @$inputName.val()
        Bus.emit 'login', name, (data)=>
          if not data.error
            AppModel.set username: name
            AppModel.trigger (data.type = 'login') and data

    'keypress input.name': ({which})-> doLogin.call this if which is 13
