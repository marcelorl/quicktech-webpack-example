'use strict';

module.exports = angular.module('App.Components.mori', [])
    .controller('ControllerAdmin', ControllerMori);

/*ngInject*/
function ControllerMori($scope)
{
    $scope.title = 'Mori';
}