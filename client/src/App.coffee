define [
  'Bus'
  'cell!ChatLog'
  'cell!StatusBar'
], (Bus,ChatLog,StatusBar)->

  socket = io.connect()
  socket.on k,v for k,v of do->
    init: ({uuid,msgs})->
      console.log uuid, msgs
    newChat: (data)->
      Bus.trigger do->
        data.type = 'incomingChat'
        data
    
  render: (_)-> [
    _ ChatLog
    _ StatusBar
    _ '.arrow', '>'
    _ 'input.chatInput'
  ]

  on:
    'keypress input.chatInput': ({which,target})->
      if which is 13 and (data = msg: ($target = $(target)).val()).msg
        $target.val ''
        try Bus.trigger {type: 'newSelfChat', msg: data.msg}
        try socket.emit 'newChat', data
