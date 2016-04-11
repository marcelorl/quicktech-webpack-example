'use strict';

/* @ngInject */
function routesConfig($urlRouterProvider, stateHelperProvider)
{
    stateHelperProvider
        .state({
            name: 'main',
            url: '/',
            templateUrl: 'app/components/main/main.html',
            controller: 'ControllerMain',
            resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function () {
                    var mod = require('../components/main');
                    $ocLazyLoad.load({
                        name: mod.name
                    });
                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }],
            children: [
                {
                    name: 'mori',
                    url:'mori',
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
                    url:'jara',
                    templateUrl: 'app/components/jara/jara.html',
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
                    url:'roso',
                    templateUrl: 'app/components/roso/roso.html',
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
                    url:'404',
                    templateUrl: 'app/components/404/404.html',
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

    $urlRouterProvider.otherwise('404');
}

module.exports = routesConfig;