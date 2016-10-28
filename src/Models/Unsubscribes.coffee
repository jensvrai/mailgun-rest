BaseModel = require '../BaseModel'

class Unsubscribes extends BaseModel

  retrieveAll: (domain, limit, body, fn = null) =>
    if typeof limit == 'function'
      fn = limit
      limit = 100
    @debug "Unsubscribes::retrieveAll(#{domain},#{body},#{limit})"
    @get domain + "/unsubscribes?limit=" + limit, body, (err, data) -> fn err, data if fn

  retrieve: (domain, address, body, fn = null) =>
    @debug "Unsubscribes::retrieve(#{domain},#{address},#{body})"
    @get domain + "/unsubscribes/" + address, body, (err, data) -> fn err, data if fn

  create: (domain, body, fn = null) =>
    @debug "Unsubscribes::create(#{domain},#{body})"
    @post domain + "/unsubscribes", body, (err, data) -> fn err, data if fn

  remove: (domain, address, fn = null) =>
    @debug "Unsubscribes::remove(#{domain},#{address})"
    @delete domain + "/unsubscribes/" + address, body, (err, data) -> fn err, data if fn

  removeAll: (domain, fn = null) =>
    @debug "Unsubscribes::remove(#{domain})"
    @delete domain + "/unsubscribes", body, (err, data) -> fn err, data if fn

module.exports = (client) -> new Unsubscribes client
