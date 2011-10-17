define [
  'AppModel'
  'Bus'
], (AppModel,Bus)->
  _ = cell::$R

  render: -> [
    _ '.onlineUsers',
      _ '.list'
      _ '.label', 'online'
  ]

  afterRender: ->
    $list = @$ '.list'

    AppModel.on login: ({name,users})->
        $list.html ''
        addUser {name:n} for n in users when name isnt n
        
    Bus.on event,fn for event, fn of do->
      userLoggedIn: addUser = ({name})->
        $list.append _ 'span.user', {'data-user': name}, name
        
      userLoggedOut: ({name})=>
        @$(".list .user[data-user='#{name}']").remove()

          