'use strict';

//require('../../../dist/img/Spiderman-Meme-Thread-2.png');
require('./404.css');

module.exports = angular.module('App.Components.NotFound', [])
    .controller('ControllerNotFound', require('./ControllerNotFound.js'));