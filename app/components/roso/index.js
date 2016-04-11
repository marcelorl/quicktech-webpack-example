'use strict';

module.exports = angular.module('App.Components.roso', [])
    .controller('ControllerAdmin', ControllerRoso);

/*ngInject*/
function ControllerRoso($scope)
{
    $scope.title = 'Roso';
}