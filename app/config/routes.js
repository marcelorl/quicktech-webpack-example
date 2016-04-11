'use strict';

/* @ngInject */
function routesConfig($urlRouterProvider, stateHelperProvider)
{
    stateHelperProvider
        .state({
            name: 'main',
            url: '/',
            template: 'merda',
            controller: function($scope)
            {
                $scope.title = 'asdf';
            },
            children: [
                {
                    name: 'mori',
                    url:'/mori',
                    templateUrl: 'app/components/mori/mori.html',
                    controller: 'ControllerMori',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad)
                    {
                        var deferred = $q.defer();

                        require.ensure([], function() {
                            var mod = require('../components/mori');
                            $ocLazyLoad.load({
                                name: mod.name
                            });
                            deferred.resolve(mod.controller);
                        });

                        return deferred.promise;
                    }]
                },
                {
                    name: 'jara',
                    url:'/jara',
                    templateUrl: 'app/components/mori/jara.html',
                    controller: 'ControllerJara',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad)
                    {
                        var deferred = $q.defer();

                        require.ensure([], function() {
                            var mod = require('../components/jara');
                            $ocLazyLoad.load({
                                name: mod.name
                            });
                            deferred.resolve(mod.controller);
                        });

                        return deferred.promise;
                    }]
                },
                {
                    name: 'roso',
                    url:'/roso',
                    templateUrl: 'app/components/mori/roso.html',
                    controller: 'ControllerRoso',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad)
                    {
                        var deferred = $q.defer();

                        require.ensure([], function() {
                            var mod = require('../components/roso');
                            $ocLazyLoad.load({
                                name: mod.name
                            });
                            deferred.resolve(mod.controller);
                        });

                        return deferred.promise;
                    }]
                },
                {
                    name: '404',
                    url:'/404',
                    templateUrl: 'app/components/mori/404.html',
                    controller: 'ControllerNotFound',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad)
                    {
                        var deferred = $q.defer();

                        require.ensure([], function() {
                            var mod = require('../components/404');
                            $ocLazyLoad.load({
                                name: mod.name
                            });
                            deferred.resolve(mod.controller);
                        });

                        return deferred.promise;
                    }]
                }
            ]
        });

    $urlRouterProvider.otherwise('/404');
}

module.exports = routesConfig;