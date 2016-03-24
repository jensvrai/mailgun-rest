BaseModel = require '../BaseModel'

class Messages extends BaseModel

  create: (domain, body, fn = null) =>
    @debug "Messages::create(#{domain} #{body})"
    @post domain + "/messages" , body, (err, data) -> fn err, data if fn

module.exports = (client) -> new Messages client
