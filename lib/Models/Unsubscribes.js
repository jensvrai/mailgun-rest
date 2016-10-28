(function() {
  var BaseModel, Unsubscribes,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Unsubscribes = (function(superClass) {
    extend(Unsubscribes, superClass);

    function Unsubscribes() {
      this.removeAll = bind(this.removeAll, this);
      this.remove = bind(this.remove, this);
      this.create = bind(this.create, this);
      this.retrieve = bind(this.retrieve, this);
      this.retrieveAll = bind(this.retrieveAll, this);
      return Unsubscribes.__super__.constructor.apply(this, arguments);
    }

    Unsubscribes.prototype.retrieveAll = function(domain, limit, body, fn) {
      if (fn == null) {
        fn = null;
      }
      if (typeof limit === 'function') {
        fn = limit;
        limit = 100;
      }
      this.debug("Unsubscribes::retrieveAll(" + domain + "," + body + "," + limit + ")");
      return this.get(domain + "/unsubscribes?limit=" + limit, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Unsubscribes.prototype.retrieve = function(domain, address, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Unsubscribes::retrieve(" + domain + "," + address + "," + body + ")");
      return this.get(domain + "/unsubscribes/" + address, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Unsubscribes.prototype.create = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Unsubscribes::create(" + domain + "," + body + ")");
      return this.post(domain + "/unsubscribes", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Unsubscribes.prototype.remove = function(domain, address, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Unsubscribes::remove(" + domain + "," + address + ")");
      return this["delete"](domain + "/unsubscribes/" + address, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Unsubscribes.prototype.removeAll = function(domain, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Unsubscribes::remove(" + domain + ")");
      return this["delete"](domain + "/unsubscribes", function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Unsubscribes;

  })(BaseModel);

  module.exports = function(client) {
    return new Unsubscribes(client);
  };

}).call(this);
