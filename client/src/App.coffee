define [], ->

  socket = io.connect()
  socket.on 'news', (data)->
    console.log data
    socket.emit 'my other event', my: 'data'
    
  render: (_)-> [
    "Hellow"
  ]