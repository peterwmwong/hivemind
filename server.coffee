resolve = require('path').resolve
server = (connect = require 'connect')()

port = process.env.PORT or 8888
path = "#{__dirname}/client/"

server.use use for use in [
  connect.favicon()
  connect.static path, maxAge: 1, hidden: true
]
server.listen port
console.log "'serving #{path} on #{server.address().port}"

io = require('socket.io').listen server
io.sockets.on 'connection', (socket)->
  socket.emit 'news', hello: 'world'
  socket.on 'my other event', (data)->
    console.log data
    