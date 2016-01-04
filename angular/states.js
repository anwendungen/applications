/**
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
        // $urlRouterProvider.otherwise('/');
    }

})();