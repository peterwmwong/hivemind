resolve = require('path').resolve
server = (connect = require 'connect')()
uuid = require 'node-uuid'

port = process.env.PORT or 8888
path = "#{__dirname}/client/"

server.use use for use in [
  connect.favicon()
  connect.static path, maxAge: 1, hidden: true
]
server.listen port
console.log "'serving #{path} on #{server.address().port}"

users = {}

io = require('socket.io').listen server

io.configure ->
  io.set 'log level', 1

handlers = do->
  [k,v] for k,v of do->
    login: (newName)->
      @name = newName
    newChat: (data)->
      console.log "newChat[#{@uid}]: #{data?.msg}"
      @socket.broadcast.emit 'newChat',
        msg: data.msg
        uid: @uid
        name: @name


io.sockets.on 'connection', (socket)->
  # Register user with UUID
  ctx = users[uid = uuid()] =
    uid: uid
    socket: socket
  socket.emit 'uuid', uid
  for k in handlers
    socket.on k[0], k[1].bind(ctx) 