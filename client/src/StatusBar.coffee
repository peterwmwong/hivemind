define ['Bus'], (Bus)->
  _ = cell::$R

  render: (_)-> [
    _ '.onlineUsers',
      _ '.list'
      _ '.label', 'online'
  ]

  afterRender: ->
    $list = @$ '.list'

    Bus.bind
      userLoggedIn: addUser = ({name})->
        $list.append _ 'span.user', {'data-user': name}, name
        
      userLoggedOut: ({name})=>
        @$(".list .user[data-user='#{name}']").remove()

      loginSuccess: ({name,users})->
        $list.html ''
        addUser {name:n} for n in users when name isnt n
          