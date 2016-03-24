(function() {
  var BaseModel, Bounces,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Bounces = (function(superClass) {
    extend(Bounces, superClass);

    function Bounces() {
      this.removeAll = bind(this.removeAll, this);
      this.remove = bind(this.remove, this);
      this.create = bind(this.create, this);
      this.retrieve = bind(this.retrieve, this);
      this.retrieveAll = bind(this.retrieveAll, this);
      return Bounces.__super__.constructor.apply(this, arguments);
    }

    Bounces.prototype.retrieveAll = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Bounces::retrieveAll(" + domain + "," + body + ")");
      return this.get(domain + "/bounces", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Bounces.prototype.retrieve = function(domain, address, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Bounces::retrieve(" + domain + "," + address + "," + body + ")");
      return this.get(domain + "/bounces/" + address, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Bounces.prototype.create = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Bounces::create(" + domain + "," + body + ")");
      return this.post(domain + "/bounces", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Bounces.prototype.remove = function(domain, address, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Bounces::remove(" + domain + "," + address + ")");
      return this["delete"](domain + "/bounces/" + address, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Bounces.prototype.removeAll = function(domain, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Bounces::remove(" + domain + ")");
      return this["delete"](domain + "/bounces", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Bounces;

  })(BaseModel);

  module.exports = function(client) {
    return new Bounces(client);
  };

}).call(this);
