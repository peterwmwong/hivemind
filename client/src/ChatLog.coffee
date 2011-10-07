define ['Bus'], (Bus)->
  _ = cell::$R

  renderChat: ({type,name,msg,uid})->
    @$el.append do->
      _ ".chat#{type is 'newSelfChat' and '.self' or ''}",
        _ 'span.from', uid
        _ 'span.msg', msg
    @$el.scrollTop 999999
    
  afterRender: ->
    handleChat = (data)=>
      data and @renderChat data
    Bus.bind
      incomingChat: handleChat
      newSelfChat: handleChat
