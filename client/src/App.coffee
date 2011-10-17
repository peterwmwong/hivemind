define [
  'AppModel'
  'Bus'
  'cell!Login'
  'cell!ChatLog'
  'cell!StatusBar'
], (AppModel,Bus,Login,ChatLog,StatusBar)->

  render: (_)-> [
    _ Login
    _ ChatLog
    _ StatusBar
    _ '.wrapForFF_see_579776',
      _ '#chatInputGroup',
          _ 'p.arrow', '>'
          _ '.wrapper',
            _ 'input#chatInput'
  ]

  afterRender: ->
    @$input = @$ '#chatInput'

    AppModel.on
      login: ({name})=>
        @$('.Login').toggle false
        @$('.arrow').html "#{name} >"
        setTimeout (=>@$input.focus()), 0
      logout: =>
        @$('.Login').toggle true

  on:
    'keypress #chatInput': ({which})->
      if AppModel.username
        data =
          msg: @$input.val()
          name: AppModel.username
        if which is 13 and data.msg
          @$input.val ''
          Bus.emit 'chat', data, ({error,date})->
            data.type = 'newChat'
            data.date = date
            AppModel.trigger data