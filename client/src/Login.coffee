define

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
        @options.onLogin name

    'keypress input.name': ({which})->
      if which is 13 then doLogin.call this
