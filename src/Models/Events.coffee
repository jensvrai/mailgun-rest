BaseModel = require '../BaseModel'

class Events extends BaseModel

  retrieve: (domain, body, fn = null) =>
    @debug "Events::retrieve()"
    @get domain + "/events", body, (err, data) -> fn err, data if fn

module.exports = (client) -> new Events client
