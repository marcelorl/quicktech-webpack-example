'use strict';

module.exports = angular.module('App', [
    'ui.router',
    'ui.router.stateHelper',
    'oc.lazyLoad',

    require('./components').name
])
    .config(require('./routes.js'));
