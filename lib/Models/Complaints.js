(function() {
  var BaseModel, Complaints,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Complaints = (function(superClass) {
    extend(Complaints, superClass);

    function Complaints() {
      this.removeAll = bind(this.removeAll, this);
      this.remove = bind(this.remove, this);
      this.create = bind(this.create, this);
      this.retrieve = bind(this.retrieve, this);
      this.retrieveAll = bind(this.retrieveAll, this);
      return Complaints.__super__.constructor.apply(this, arguments);
    }

    Complaints.prototype.retrieveAll = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Complaints::retrieveAll(" + domain + "," + body + ")");
      return this.get(domain + "/complaints", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Complaints.prototype.retrieve = function(domain, address, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Complaints::retrieve(" + domain + "," + address + "," + body + ")");
      return this.get(domain + "/complaints/" + address, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Complaints.prototype.create = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Complaints::create(" + domain + "," + body + ")");
      return this.post(domain + "/complaints", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Complaints.prototype.remove = function(domain, address, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Complaints::remove(" + domain + "," + address + ")");
      return this["delete"](domain + "/complaints/" + address, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Complaints.prototype.removeAll = function(domain, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Complaints::remove(" + domain + ")");
      return this["delete"](domain + "/complaints", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Complaints;

  })(BaseModel);

  module.exports = function(client) {
    return new Complaints(client);
  };

}).call(this);
