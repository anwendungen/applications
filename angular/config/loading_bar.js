(function() {
    'use strict';

    angular
        .module('app.config')
        .config(cfpLoadingBar);

    cfpLoadingBar.$inject = ['cfpLoadingBarProvider'];

    /* @ngInject */
    function cfpLoadingBar(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }

})();

