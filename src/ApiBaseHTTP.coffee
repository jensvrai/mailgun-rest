debug = require('debug') 'mailgun:ApiBaseHTTP'
{ApiBase} = require './ApiBase'
querystring = require 'querystring'
slumber = require 'slumber'


class module.exports.ApiBaseHTTP extends ApiBase
  handleOptions: =>
    super
    @options.base_url ?= ''

    unless @options.auth
      throw "`auth` is mandatory"

    @options.slumber ?= {}
    @options.slumber.append_slash ?= false

    if @options.auth?
      @options.slumber.auth = @options.auth

    debug "handleOptions()"

  init: =>
    super
    api = slumber.API 'https://api.mailgun.net/', @options.slumber
    @slumber = api(@options.base_url)

  prepare_opts: (opts) =>
    opts.__query ?= {}
    opts.headers = { 'content-type': 'application/x-www-form-urlencoded' }
    return opts

  fn_wrapper: (fn) =>
    return (err, response, ret) =>
      statusMessage = if response then response.statusMessage else null
      switch statusMessage
        when 'OK'
          return fn(err, ret)
        else
          return fn(JSON.parse(response.body))
          break
      return

  get: (path, query={}, fn=null) =>
    if 'function' is typeof query
      fn = query
      query = {}
    opts = @prepare_opts query
    @slumber(path).get opts, @fn_wrapper fn

  delete: (path, fn=null) =>
    opts = @prepare_opts {}
    @slumber(path).delete opts, @fn_wrapper fn

  post: (path, data={}, fn=null) =>
    opts = @prepare_opts data
    @slumber(path).post opts, @fn_wrapper fn

  put: (path, data={}, fn=null) =>
    opts = @prepare_opts data
    @slumber(path).put opts, @fn_wrapper fn

  patch: (path, data={}, fn=null) =>
    opts = @prepare_opts data
    @slumber(path).patch opts, @fn_wrapper fn
