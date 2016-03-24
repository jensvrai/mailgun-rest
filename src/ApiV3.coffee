debug = require('debug') 'mailgun:ApiV3'
{ApiBaseHTTP} = require './ApiBaseHTTP'

class module.exports.ApiV3 extends ApiBaseHTTP
  handleOptions: =>
    super
    @options.base_url = 'v3'
    debug "handleOptions()"
