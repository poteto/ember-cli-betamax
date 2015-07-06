/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-betamax',
  included: function(app) {
    if (app.tests) {
      app.import('bower_components/sinonjs/sinon.js', {
        type: 'test'
      });
    }
  }
};
