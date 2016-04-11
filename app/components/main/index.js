'use strict';

module.exports = angular.module('App.Components.Main', [])
    .controller('ControllerAdmin', ControllerMain);

/*ngInject*/
function ControllerMain($scope)
{
    $scope.title = 'Main';
}