'use strict';

require('./src/assets/scss/init.scss');

exports.onClientEntry = () => {};
exports.onRouteUpdate = () => {
Sirv.start();
}