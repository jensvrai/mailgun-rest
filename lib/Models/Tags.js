(function() {
  var BaseModel, Tags,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Tags = (function(superClass) {
    extend(Tags, superClass);

    function Tags() {
      this.remove = bind(this.remove, this);
      this.retrieveStats = bind(this.retrieveStats, this);
      this.update = bind(this.update, this);
      this.retrieve = bind(this.retrieve, this);
      this.retrieveAll = bind(this.retrieveAll, this);
      return Tags.__super__.constructor.apply(this, arguments);
    }

    Tags.prototype.retrieveAll = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::retrieve(" + body + ")");
      return this.get(domain + "/tags", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Tags.prototype.retrieve = function(domain, tag, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::retrieve(" + tag + ")");
      return this.get(domain + "/tags/" + tag, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Tags.prototype.update = function(domain, tag, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::update(" + tag + "," + body + ")");
      return this.put(domain + "/tags/" + tag, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Tags.prototype.retrieveStats = function(domain, tag, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::retrieveStats(" + tag + ")");
      return this.get(domain + "/tags/" + tag + "/stats", function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Tags.prototype.remove = function(domain, tag, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Tags::delete(" + tag + ")");
      return this["delete"](domain + "/tags/" + tag, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Tags;

  })(BaseModel);

  module.exports = function(client) {
    return new Tags(client);
  };

}).call(this);
