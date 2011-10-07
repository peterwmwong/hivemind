define ['Bus'], (Bus)->
  _ = cell::$R

  renderIncomingChat: (name,msg,uid)->
    @$el.append do->
      _ '.chat',
        _ 'span.from', uid
        _ 'span.msg', msg
    
  afterRender: ->
    Bus.bind 'incomingChat': ({msg,uid,name})=>
      msg and @renderIncomingChat name, msg, uid
