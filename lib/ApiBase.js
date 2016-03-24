(function() {
  var debug,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  debug = require('debug')('mailgun:ApiBase');

  module.exports.ApiBase = (function() {
    function ApiBase(options) {
      this.options = options;
      this.init = bind(this.init, this);
      this.handleOptions = bind(this.handleOptions, this);
      this.handleOptions();
      this.init();
      debug("constructor()");
    }

    ApiBase.prototype.handleOptions = function() {
      var base;
      if ((base = this.options).verbose == null) {
        base.verbose = false;
      }
      return debug("handleOptions()");
    };

    ApiBase.prototype.init = function() {
      this.client = this;
      debug("init()");
      this.bounces = require('./Models/Bounces')(this.client);
      this.complaints = require('./Models/Complaints')(this.client);
      this.domains = require('./Models/Domains')(this.client);
      this.events = require('./Models/Events')(this.client);
      this.messages = require('./Models/Messages')(this.client);
      this.stats = require('./Models/Stats')(this.client);
      this.tags = require('./Models/Tags')(this.client);
      return this.unsubscribes = require('./Models/Unsubscribes')(this.client);
    };

    return ApiBase;

  })();

}).call(this);
