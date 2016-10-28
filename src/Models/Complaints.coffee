BaseModel = require '../BaseModel'

class Complaints extends BaseModel

  retrieveAll: (domain, limit, body, fn = null) =>
    if typeof limit == 'function'
      fn = limit
      limit = 100
    @debug "Complaints::retrieveAll(#{domain},#{body},#{limit})"
    @get domain + "/complaints?limit=" + limit, body, (err, data) -> fn err, data if fn

  retrieve: (domain, address, body, fn = null) =>
    @debug "Complaints::retrieve(#{domain},#{address},#{body})"
    @get domain + "/complaints/" + address, body, (err, data) -> fn err, data if fn

  create: (domain, body, fn = null) =>
    @debug "Complaints::create(#{domain},#{body})"
    @post domain + "/complaints", body, (err, data) -> fn err, data if fn

  remove: (domain, address, fn = null) =>
    @debug "Complaints::remove(#{domain},#{address})"
    @delete domain + "/complaints/" + address, body, (err, data) -> fn err, data if fn

  removeAll: (domain, fn = null) =>
    @debug "Complaints::remove(#{domain})"
    @delete domain + "/complaints", body, (err, data) -> fn err, data if fn

module.exports = (client) -> new Complaints client
