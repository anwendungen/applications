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
        //
    }

})();