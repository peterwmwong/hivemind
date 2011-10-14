server = (connect = require 'connect')()
handlers = [
  userHandler = require './UserHandler'
  chatHandler = require './ChatHandler'
]

port = process.env.PORT or 8888
path = "#{__dirname}/../client/"

server.use use for use in [
  connect.favicon()
  connect.static path, maxAge: 1, hidden: true
]
server.listen port
console.log "'serving #{path} on #{server.address().port}"

chatBuffer = []
users = {}

io = require('socket.io').listen server
io.enable 'browser client minification'
io.enable 'browser client etag'
io.enable 'browser client gzip'
io.set 'log level', 3
io.set 'origins', '*:*'
io.set 'transports', [
  'websocket'
  'flashsocket'
  'htmlfile'
  'xhr-polling'
  'jsonp-polling'
]
io.sockets.on 'connection', (socket)->
  socket.emit 'connect', 'yo'
  ctx = {chatBuffer, users, socket}
  for handler in handlers
    for event, method of handler.on
      socket.on event, method.bind ctx

