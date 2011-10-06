define ['Bus'], (Bus)->
  _ = cell::$R

  render: (_)-> [
    _ '.onlineUsers',
      _ '.list',
        for name in ['jkaplan','dlavin','pwong','rgerry','cmaroney']
          _ 'span.user', name
      _ '.label', 'online'
  ]

  afterRender: ->
    Bus.bind 'user.logout': ({data})=>
      @$('.list').append _ 'span.user', data