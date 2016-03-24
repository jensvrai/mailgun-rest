(function() {
  var BaseModel, Messages,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Messages = (function(superClass) {
    extend(Messages, superClass);

    function Messages() {
      this.create = bind(this.create, this);
      return Messages.__super__.constructor.apply(this, arguments);
    }

    Messages.prototype.create = function(domain, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Messages::create(" + domain + " " + body + ")");
      return this.post(domain + "/messages", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Messages;

  })(BaseModel);

  module.exports = function(client) {
    return new Messages(client);
  };

}).call(this);
