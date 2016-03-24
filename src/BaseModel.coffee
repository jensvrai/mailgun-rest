debug = require('debug') 'mailgun:BaseModel'

class module.exports
  constructor: (@client) ->
    do @_init

  load: (model) =>
    require("./Models/#{model}") @client

  _init: =>
    @debug =   require('debug') "mailgun:Models:#{@constructor.name}"

    @get =     @client.get
    @post =    @client.post
    @put =     @client.put
    @delete =  @client.delete

    do @init if @init?
