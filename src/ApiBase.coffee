debug = require('debug') 'mailgun:ApiBase'

class module.exports.ApiBase
  constructor: (@options) ->
    do @handleOptions
    do @init
    debug "constructor()"

  handleOptions: =>
    @options.verbose ?= false
    debug "handleOptions()"

  init: =>
    @client = @
    debug "init()"
    @bounces      = require('./Models/Bounces')      @client
    @complaints   = require('./Models/Complaints')   @client
    @domains      = require('./Models/Domains')      @client
    @events       = require('./Models/Events')       @client
    @messages     = require('./Models/Messages')     @client
    @stats        = require('./Models/Stats')        @client
    @tags         = require('./Models/Tags')         @client
    @unsubscribes = require('./Models/Unsubscribes') @client
