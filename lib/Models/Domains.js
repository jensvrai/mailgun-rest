(function() {
  var BaseModel, Domains,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Domains = (function(superClass) {
    extend(Domains, superClass);

    function Domains() {
      this.updateConnection = bind(this.updateConnection, this);
      this.retrieveConnection = bind(this.retrieveConnection, this);
      this.removeCredentials = bind(this.removeCredentials, this);
      this.updateCredentials = bind(this.updateCredentials, this);
      this.setCredentials = bind(this.setCredentials, this);
      this.retrieveCredentials = bind(this.retrieveCredentials, this);
      this.remove = bind(this.remove, this);
      this.create = bind(this.create, this);
      this.retrieve = bind(this.retrieve, this);
      this.retrieveAll = bind(this.retrieveAll, this);
      return Domains.__super__.constructor.apply(this, arguments);
    }

    Domains.prototype.retrieveAll = function(body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::retrieveAll(" + body + ")");
      return this.get("domains", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.retrieve = function(domain, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::retrieve(" + domain + ")");
      return this.get("domains/" + domain, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.create = function(body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::create(" + body + ")");
      return this.post("domains", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.remove = function(domain, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::remove(" + domain + ")");
      return this["delete"]("domains/" + domain, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.retrieveCredentials = function(domain, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::retrieveCredentials(" + domain + ")");
      return this.get("domains/" + domain + "/credentials", function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.setCredentials = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::setCredentials(" + body + ")");
      return this.post("domains/" + domain + "/credentials", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.updateCredentials = function(domain, login, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::updateCredentials(" + body + ")");
      return this.put("domains/" + domain + "/credentials/" + login, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.removeCredentials = function(domain, login, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::removeCredentials(" + domain + ")");
      return this["delete"]("domains/" + domain + "/credentials/" + login, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.retrieveConnection = function(domain, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::retrieveCredentials(" + domain + ")");
      return this.get("domains/" + domain + "/connection", function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Domains.prototype.updateConnection = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Domains::retrieveCredentials(" + domain + ")");
      return this.put("domains/" + domain + "/connection/", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Domains;

  })(BaseModel);

  module.exports = function(client) {
    return new Domains(client);
  };

}).call(this);
