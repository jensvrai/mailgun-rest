(function() {
  var BaseModel, Events,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Events = (function(superClass) {
    extend(Events, superClass);

    function Events() {
      this.retrieve = bind(this.retrieve, this);
      return Events.__super__.constructor.apply(this, arguments);
    }

    Events.prototype.retrieve = function(body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Events::retrieve()");
      return this.get("events", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Events;

  })(BaseModel);

  module.exports = function(client) {
    return new Events(client);
  };

}).call(this);
