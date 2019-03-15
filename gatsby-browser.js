'use strict';

require('./src/assets/scss/init.scss');

exports.onClientEntry = () => {};
exports.onRouteUpdate = () => {
  if (typeof Sirv !== 'undefined') {
    Sirv.start();
  }
};