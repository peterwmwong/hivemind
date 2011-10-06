define [
  'Bus'
  'cell!ChatLog'
  'cell!StatusBar'
], (Bus,ChatLog,StatusBar)->

  socket = io.connect()
  socket.on 'news', (data)->
    console.log data
    socket.emit 'my other event', my: 'data'
    
  render: (_)-> [
    _ ChatLog
    _ StatusBar
    _ '.arrow', '>'
    _ 'input.chatInput'
  ]