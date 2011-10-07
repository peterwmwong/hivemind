define [
  'Bus'
  'cell!ChatLog'
  'cell!StatusBar'
], (Bus,ChatLog,StatusBar)->

  socket = io.connect()
  socket.on 'newChat', (data)->
    data.type = 'incomingChat'
    Bus.trigger data
    
  render: (_)-> [
    _ ChatLog
    _ StatusBar
    _ '.arrow', '>'
    _ 'input.chatInput'
  ]

  on:
    'keypress input.chatInput': ({which,target})->
      if which is 13
        data = msg: ($target = $(target)).val()
        $target.val ''
        socket.emit 'newChat', data
