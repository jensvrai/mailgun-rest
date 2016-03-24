BaseModel = require '../BaseModel'

class Tags extends BaseModel

  retrieveAll: (domain, body, fn = null) =>
    @debug "Tags::retrieve(#{body})"
    @get domain + "/tags", body, (err, data) -> fn err, data if fn

  retrieve: (domain, tag, fn = null) =>
    @debug "Tags::retrieve(#{tag})"
    @get domain + "/tags/" + tag, (err, data) -> fn err, data if fn

  update: (domain, tag, body, fn = null) =>
    @debug "Tags::update(#{tag},#{body})"
    @put domain + "/tags/" + tag, body, (err, data) -> fn err, data if fn

  retrieveStats: (domain, tag, fn = null) =>
    @debug "Tags::retrieveStats(#{tag})"
    @get domain + "/tags/" + tag + "/stats", (err, data) -> fn err, data if fn

  remove: (domain, tag, fn = null) =>
    @debug "Tags::delete(#{tag})"
    @delete domain + "/tags/" + tag, (err, data) -> fn err, data if fn

module.exports = (client) -> new Tags client
