/**
 * states.js
 * Created by anonymous on 18/11/15 17:31.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .config(applicationsRouter);

    applicationsRouter.$inject = ['$stateProvider', '$urlRouterProvider', 'layoutProvider'];

    /* @ngInject */
    function applicationsRouter($stateProvider, $urlRouterProvider, layoutProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('client', {
                abstract: true,
                views   : {
                    'layout@'       : {
                        templateUrl : layoutProvider.layout('themes.minimalist'),
                        controller  : 'ClientController',
                        controllerAs: 'client'
                    },
                    'header@client' : {
                        templateUrl : layoutProvider.view('client.header'),
                        controller  : 'ClientHeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@client': {
                        templateUrl : layoutProvider.view('client.sidenav'),
                        controller  : 'ClientSidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@client'  : {
                        templateUrl : layoutProvider.view('client.aside'),
                        controller  : 'ClientAsideController',
                        controllerAs: 'aside'
                    },
                    'footer@client' : {
                        templateUrl : layoutProvider.view('client.footer'),
                        controller  : 'ClientFooterController',
                        controllerAs: 'footer'
                    },
                    'main@client'   : {}
                }
            })
            .state('client.home', {
                url  : '/',
                data : {pageName: 'Homepage'},
                views: {
                    'main@client': {
                        templateUrl : layoutProvider.view('client.home'),
                        controller  : 'ClientHomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url     : '/page',
                views   : {
                    'layout@'           : {
                        templateUrl : layoutProvider.layout('staticpage.simple'),
                        controller  : 'StaticpageController',
                        controllerAs: 'staticpage'
                    },
                    'header@staticpage' : {
                        templateUrl : layoutProvider.view('staticpage.header'),
                        controller  : 'StaticpageHeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@staticpage': {
                        templateUrl : layoutProvider.view('staticpage.sidenav'),
                        controller  : 'StaticpageSidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@staticpage'  : {
                        templateUrl : layoutProvider.view('staticpage.aside'),
                        controller  : 'StaticpageAsideController',
                        controllerAs: 'aside'
                    },
                    'footer@staticpage' : {
                        templateUrl : layoutProvider.view('staticpage.footer'),
                        controller  : 'StaticpageFooterController',
                        controllerAs: 'footer'
                    },
                    'main@staticpage'   : {}
                }
            })
            .state('staticpage.landing', {
                url  : '/',
                data : {pageName: 'Landing page'},
                views: {
                    'main@staticpage': {
                        templateUrl : layoutProvider.view('staticpage.landing'),
                        controller  : 'StaticpageLandingController',
                        controllerAs: 'landing'
                    }
                }
            });
    }

})();