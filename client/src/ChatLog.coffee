define ['Bus'], (Bus)->
  _ = cell::$R

  renderIncomingChat: (msg)->
    @$el.append _ '.chat', msg
    
  afterRender: ->
    Bus.bind 'incomingChat': ({data})=>
      data.msg and renderIncomingChat data.msg
