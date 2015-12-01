/**
 * Created by anonymoussc on 18/11/15 17:31.
 */

(function() {
    'use strict';

    angular.module('app.routes').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                abstract: true,
                url     : '/dashboard',
                views   : {
                    'layout@'         : {
                        templateUrl : layout('dashboard.simple'),
                        controller  : 'DashboardSimpleController',
                        controllerAs: 'ds'
                    },
                    'header@dashboard': {
                        templateUrl : view('dashboard.header'),
                        controller  : 'DashboardHeaderController',
                        controllerAs: 'dh'
                    },
                    'left@dashboard'  : {
                        templateUrl : view('dashboard.left'),
                        controller  : 'DashboardLeftController',
                        controllerAs: 'dl'
                    },
                    'right@dashboard' : {
                        templateUrl : view('dashboard.right'),
                        controller  : 'DashboardRightController',
                        controllerAs: 'dr'
                    },
                    'footer@dashboard': {
                        templateUrl: view('dashboard.footer'),
                        controller  : 'DashboardFooterController',
                        controllerAs: 'df'
                    },
                    'main@dashboard'  : {}
                }
            })
            .state('dashboard.home', {
                url  : '/',
                data : { pageName: 'Overview' },
                views: {
                    'main@dashboard': {
                        templateUrl: view('dashboard.home')
                    }
                }
            })
            .state('app', {
                abstract: true,
                views   : {
                    'layout@'   : {
                        templateUrl: layout('app.simple')
                    },
                    'header@app': {
                        templateUrl: view('app.header')
                    },
                    'left@app'  : {
                        templateUrl: view('app.left')
                    },
                    'right@app' : {
                        templateUrl: view('app.right')
                    },
                    'footer@app': {
                        templateUrl: view('app.footer')
                    },
                    'main@app'  : {}
                }
            })
            .state('app.home', {
                url  : '/',
                data : { pageName: 'Homepage' },
                views: {
                    'main@app': {
                        templateUrl: view('app.home')
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url     : '/page',
                views   : {
                    'layout@'          : {
                        templateUrl: layout('staticpage.simple')
                    },
                    'header@staticpage': {
                        templateUrl: view('staticpage.header')
                    },
                    'left@staticpage'  : {
                        templateUrl: view('staticpage.left')
                    },
                    'right@staticpage' : {
                        templateUrl: view('staticpage.right')
                    },
                    'footer@staticpage': {
                        templateUrl: view('staticpage.footer')
                    },
                    'main@staticpage'  : {}
                }
            })
            .state('staticpage.landing', {
                url  : '/',
                data : { pageName: 'Landing page' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.landing')
                    }
                }
            });

        function view(viewName) {
            if (viewName !== "") {
                return './views/applications/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/applications/app/home/home.html';
            }
        }

        function layout(viewName) {
            if (viewName !== "") {
                return './views/themes/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/applications/app/home/home.html';
            }

        }

        function appName(v) {
            if (v.split(".")[0]) {
                return v.split(".")[0];
            } else {
                return 'app';
            }
        }

        function fileDir(v) {
            if (v.split(".")[1]) {
                return v.split(".")[1];
            } else if (!v.split(".")[0]) {
                return v;
            } else {
                return 'home';
            }
        }

        function fileName(v) {
            if (v.split(".")[2]) {
                return v.split(".")[2];
            } else if (!v.split(".")[2]) {
                if (v.split(".")[1]) {
                    return v.split(".")[1];
                }
            } else {
                return 'home';
            }
        }
    });
})();
