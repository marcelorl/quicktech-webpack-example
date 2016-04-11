'use strict';

module.exports = angular.module('App.Components.NotFound', [])
    .controller('ControllerAdmin', ControllerNotFound);

/*ngInject*/
function ControllerNotFound($scope)
{
    $scope.title = 'Jara';
}