'use strict';

module.exports = angular.module('App.Components.jara', [])
    .controller('ControllerAdmin', ControllerJara);

/*ngInject*/
function ControllerJara($scope)
{
    $scope.title = 'Jara';
}