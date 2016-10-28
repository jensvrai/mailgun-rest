BaseModel = require '../BaseModel'

class Bounces extends BaseModel

  retrieveAll: (domain, limit, body, fn = null) =>
    if typeof limit == 'function'
      fn = limit
      limit = 100
    @debug "Bounces::retrieveAll(#{domain},#{body},#{limit})"
    @get domain + "/bounces?limit=" + limit, body, (err, data) -> fn err, data if fn

  retrieve: (domain, address, body, fn = null) =>
    @debug "Bounces::retrieve(#{domain},#{address},#{body})"
    @get domain + "/bounces/" + address, body, (err, data) -> fn err, data if fn

  create: (domain, body, fn = null) =>
    @debug "Bounces::create(#{domain},#{body})"
    @post domain + "/bounces", body, (err, data) -> fn err, data if fn

  remove: (domain, address, fn = null) =>
    @debug "Bounces::remove(#{domain},#{address})"
    @delete domain + "/bounces/" + address, (err, data) -> fn err, data if fn

  removeAll: (domain, fn = null) =>
    @debug "Bounces::remove(#{domain})"
    @delete domain + "/bounces", (err, data) -> fn err, data if fn

module.exports = (client) -> new Bounces client
