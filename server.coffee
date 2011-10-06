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

io.configure ->
  io.set 'log level', 1

io.sockets.on 'connection', (socket)->
  socket.on k,v for k,v of do->
    evt: ->
    evt2: ->
  socket.on 'my other event', (data)->
    console.log data
    