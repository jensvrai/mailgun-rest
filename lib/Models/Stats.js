(function() {
  var BaseModel, Stats,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Stats = (function(superClass) {
    extend(Stats, superClass);

    function Stats() {
      this.retrieve = bind(this.retrieve, this);
      return Stats.__super__.constructor.apply(this, arguments);
    }

    Stats.prototype.retrieve = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Stats::retrieve(" + body + ")");
      return this.get(domain + "/stats/total", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Stats;

  })(BaseModel);

  module.exports = function(client) {
    return new Stats(client);
  };

}).call(this);
