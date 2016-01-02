(function() {
    'use strict';

    angular
        .module('app')
        .config(cfpLoadingBar);

    cfpLoadingBar.$inject = ['cfpLoadingBarProvider'];

    /* @ngInject */
    function cfpLoadingBar(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }

})();

