BaseModel = require '../BaseModel'

class Domains extends BaseModel

  retrieveAll: (body, fn = null) =>
    @debug "Domains::retrieveAll(#{body})"
    @get "domains", body, (err, data) -> fn err, data if fn

  retrieve: (domain, fn = null) =>
    @debug "Domains::retrieve(#{domain})"
    @get "domains/" + domain, (err, data) -> fn err, data if fn

  create: (body, fn = null) =>
    @debug "Domains::create(#{body})"
    @post "domains", body, (err, data) -> fn err, data if fn

  remove: (domain, fn = null) =>
    @debug "Domains::remove(#{domain})"
    @delete "domains/" + domain, (err, data) -> fn err, data if fn

  retrieveCredentials: (domain, fn = null) =>
    @debug "Domains::retrieveCredentials(#{domain})"
    @get "domains/" + domain + "/credentials", (err, data) -> fn err, data if fn

  setCredentials: (domain, body, fn = null) =>
    @debug "Domains::setCredentials(#{body})"
    @post "domains/" + domain + "/credentials", body, (err, data) -> fn err, data if fn

  updateCredentials: (domain, login, body, fn = null) =>
    @debug "Domains::updateCredentials(#{body})"
    @put "domains/" + domain + "/credentials/" + login, body, (err, data) -> fn err, data if fn

  removeCredentials: (domain, login, fn = null) =>
    @debug "Domains::removeCredentials(#{domain})"
    @delete "domains/" + domain + "/credentials/" + login, (err, data) -> fn err, data if fn

  retrieveConnection: (domain, fn = null) =>
    @debug "Domains::retrieveCredentials(#{domain})"
    @get "domains/" + domain + "/connection", (err, data) -> fn err, data if fn

  updateConnection: (domain, body, fn = null) =>
    @debug "Domains::retrieveCredentials(#{domain})"
    @put "domains/" + domain + "/connection/", body, (err, data) -> fn err, data if fn

module.exports = (client) -> new Domains client
