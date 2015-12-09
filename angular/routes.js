/**
 * Created by anonymous on 18/11/15 17:31.
 */

(function() {
    'use strict';

    angular.module('app').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                abstract: true,
                url     : '/dashboard',
                views   : {
                    'layout@'         : {
                        templateUrl : layout('dashboard.simple'),
                        controller  : 'DashboardController',
                        controllerAs: 'dashboard'
                    },
                    'header@dashboard': {
                        templateUrl : view('dashboard.header'),
                        controller  : 'DashboardHeaderController',
                        controllerAs: 'dashboardHeader'
                    },
                    'left@dashboard'  : {
                        templateUrl : view('dashboard.left'),
                        controller  : 'DashboardLeftController',
                        controllerAs: 'dashboardLeft'
                    },
                    'right@dashboard' : {
                        templateUrl : view('dashboard.right'),
                        controller  : 'DashboardRightController',
                        controllerAs: 'dashboardRight'
                    },
                    'footer@dashboard': {
                        templateUrl : view('dashboard.footer'),
                        controller  : 'DashboardFooterController',
                        controllerAs: 'dashboardFooter'
                    },
                    'main@dashboard'  : {}
                }
            })
            .state('dashboard.home', {
                url  : '/',
                data : { pageName: 'Overview' },
                views: {
                    'main@dashboard': {
                        templateUrl : view('dashboard.home'),
                        controller  : 'DashboardHomeController',
                        controllerAs: 'dashboardHome'
                    }
                }
            })
            .state('app', {
                abstract: true,
                views   : {
                    'layout@'   : {
                        templateUrl : layout('app.simple'),
                        controller  : 'AppLayoutController',
                        controllerAs: 'appLayout'
                    },
                    'header@app': {
                        templateUrl : view('app.header'),
                        controller  : 'HeaderController',
                        controllerAs: 'header'
                    },
                    'left@app'  : {
                        templateUrl : view('app.left'),
                        controller  : 'LeftController',
                        controllerAs: 'left'
                    },
                    'right@app' : {
                        templateUrl : view('app.right'),
                        controller  : 'RightController',
                        controllerAs: 'right'
                    },
                    'footer@app': {
                        templateUrl : view('app.footer'),
                        controller  : 'FooterController',
                        controllerAs: 'footer'
                    },
                    'main@app'  : {}
                }
            })
            .state('app.home', {
                url  : '/',
                data : { pageName: 'Homepage' },
                views: {
                    'main@app': {
                        templateUrl : view('app.home'),
                        controller  : 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url     : '/page',
                views   : {
                    'layout@'          : {
                        templateUrl : layout('staticpage.simple'),
                        controller  : 'StaticpageController',
                        controllerAs: 'staticpage'
                    },
                    'header@staticpage': {
                        templateUrl : view('staticpage.header'),
                        controller  : 'StaticpageHeaderController',
                        controllerAs: 'staticpageHeader'
                    },
                    'left@staticpage'  : {
                        templateUrl : view('staticpage.left'),
                        controller  : 'StaticpageLeftController',
                        controllerAs: 'staticpageLeft'
                    },
                    'right@staticpage' : {
                        templateUrl : view('staticpage.right'),
                        controller  : 'StaticpageRightController',
                        controllerAs: 'staticpageRight'
                    },
                    'footer@staticpage': {
                        templateUrl : view('staticpage.footer'),
                        controller  : 'StaticpageFooterController',
                        controllerAs: 'staticpageFooter'
                    },
                    'main@staticpage'  : {}
                }
            })
            .state('staticpage.landing', {
                url  : '/',
                data : { pageName: 'Landing page' },
                views: {
                    'main@staticpage': {
                        templateUrl : view('staticpage.landing'),
                        controller  : 'StaticpageLandingController',
                        controllerAs: 'staticpageLanding'
                    }
                }
            });

        function view(viewName) {
            if (viewName !== "") {
                return './views/app/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
            }
        }

        function layout(viewName) {
            if (viewName !== "") {
                return './views/layouts/' + appName(viewName) + '/' + fileDir(viewName) + '/' + fileName(viewName) + '.html';
            } else {
                return './views/app/app/home/home.html';
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
