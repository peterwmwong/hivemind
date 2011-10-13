BUF_MAX = 100
module.exports =

  on:
    chat: (data,cb)->
      # validate logged in and chat is from self
      if @users[@name] and @name is data.name
        console.log "[chat][#{@name}]: #{data?.msg}"
        @chatBuffer.push data
        if (overflow = @chatBuffer.length - BUF_MAX) > 0
          @chatBuffer.splice 0, overflow
        try cb true
        @socket.broadcast.emit 'chat', data