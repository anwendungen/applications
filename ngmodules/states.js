/**
 * states.js
 * Created by anonymous on 18/11/15 17:31.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .config(appRouter);

    appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function appRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'layout@'    : {
                        templateUrl : layout('app.simple'),
                        controller  : 'ClientController',
                        controllerAs: 'app'
                    },
                    'header@app' : {
                        templateUrl : view('app.header'),
                        controller  : 'ClientHeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@app': {
                        templateUrl : view('app.sidenav'),
                        controller  : 'ClientSidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@app'  : {
                        templateUrl : view('app.aside'),
                        controller  : 'ClientAsideController',
                        controllerAs: 'aside'
                    },
                    'footer@app' : {
                        templateUrl : view('app.footer'),
                        controller  : 'ClientFooterController',
                        controllerAs: 'footer'
                    },
                    'main@app'   : {}
                }
            })
            .state('app.home', {
                url  : '/',
                data : {pageName: 'Homepage'},
                views: {
                    'main@app': {
                        templateUrl : view('app.home'),
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
                        templateUrl : layout('staticpage.simple'),
                        controller  : 'StaticpageController',
                        controllerAs: 'staticpage'
                    },
                    'header@staticpage' : {
                        templateUrl : view('staticpage.header'),
                        controller  : 'StaticpageHeaderController',
                        controllerAs: 'header'
                    },
                    'sidenav@staticpage': {
                        templateUrl : view('staticpage.sidenav'),
                        controller  : 'StaticpageSidenavController',
                        controllerAs: 'sidenav'
                    },
                    'aside@staticpage'  : {
                        templateUrl : view('staticpage.aside'),
                        controller  : 'StaticpageAsideController',
                        controllerAs: 'aside'
                    },
                    'footer@staticpage' : {
                        templateUrl : view('staticpage.footer'),
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
                        templateUrl : view('staticpage.landing'),
                        controller  : 'StaticpageLandingController',
                        controllerAs: 'landing'
                    }
                }
            });

        function dashboard(viewName) {
            if (viewName !== '') {
                return './views/dashboard/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function view(viewName) {
            if (viewName !== '') {
                return './views/app/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function layout(viewName) {
            if (viewName !== '') {
                return './views/layouts/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function appName(v) {
            if (v.split('.')[0]) {
                return v.split('.')[0];
            } else {
                return 'app';
            }
        }

        function fileDir(v) {
            if (v.split('.')[1]) {
                return v.split('.')[1];
            } else if (!v.split('.')[0]) {
                return v;
            } else {
                return 'home';
            }
        }

        function fileName(v) {
            if (v.split('.')[2]) {
                return v.split('.')[2];
            } else if (!v.split('.')[2]) {
                if (v.split('.')[1]) {
                    return v.split('.')[1];
                }
            } else {
                return 'home';
            }
        }
    }

})();