'use strict';

module.exports = angular.module('App', [
    'ui.router',
    'ui.router.stateHelper',
    'oc.lazyLoad',

    //Common
    require('./config').name,
    require('./components').name
]);
