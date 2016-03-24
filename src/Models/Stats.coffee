BaseModel = require '../BaseModel'

class Stats extends BaseModel

  retrieve: (domain, body, fn = null) =>
    @debug "Stats::retrieve(#{body})"
    @get domain + "/stats/total", body, (err, data) -> fn err, data if fn

module.exports = (client) -> new Stats client
