module.exports =

  _isValidName: isValidName = (name)-> !!(/^\w+$/.exec name)

  on:
    login: login = (name,cb)->
      if not @name
        if not name or not isValidName name
          cb error: 'invalidName'
        else if @users[name] is true
          cb error: 'nameTaken'
        else
          @users[@name = name] = true
          @socket.removeAllListeners 'login'
          @socket.broadcast.emit 'userLoggedIn', {name}
          cb name: name, users: Object.keys(@users), chats: @chatBuffer

    disconnect: removeUser = ->
      name = @name
      delete @users[name]
      delete @name
      @socket.broadcast.emit 'userLoggedOut', {name}

    logout: ->
      removeUser.call this
      @socket.on 'login', login.bind this
