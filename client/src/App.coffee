define [
  'Bus'
  'cell!Login'
  'cell!ChatLog'
  'cell!StatusBar'
], (Bus,Login,ChatLog,StatusBar)->

  init: ->
    @socket = io.connect()
    for event in ['chat','userLoggedIn','userLoggedOut']
      @socket.on event, do(event)-> (data)->
        Bus.trigger (data.type = event) and data

  render: (_)-> [
    _ Login, onLogin: (name)=>
        @socket.emit 'login', ((Bus.set username: name) or name), (data)=>
          if not data.error
            @$('.Login').toggle false
            Bus.trigger (data.type = 'loginSuccess') and data
          else
            Bus.trigger 'loginFail'
    _ ChatLog
    _ StatusBar
    _ '.arrow', '>'
    _ 'input.chatInput'
  ]

  on:
    'keypress input.chatInput': ({which,target})->
      if Bus.username
        if which is 13 and (data = msg: ($target = $(target)).val()).msg
          $target.val ''
          try
            @socket.emit 'chat',
              (data.name = Bus.username) and data,
              (ok)-> Bus.trigger (data.type = 'chatSent') and data

