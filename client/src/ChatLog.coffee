define ['Bus'], (Bus)->
  _ = cell::$R

  renderChat: ({name,msg})->
    @$el.append do->
      _ ".chat#{Bus.username is name and '.self' or ''}",
        _ 'span.from', name
        _ 'span.msg', msg
    $(window).scrollTop @$el.height() #TODO There's gota be a better way...
    
  afterRender: ->
    Bus.bind
      loginSuccess: ({chats})=>
        if chats
          @renderChat msg for msg in chats

      chat: (data)=>
        data and @renderChat data
      
      chatSent: ({msg})=>
        msg and @renderChat name: Bus.username, msg: msg
