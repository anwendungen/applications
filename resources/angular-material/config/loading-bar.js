/**
 * loading-bar.js
 * Created by anonymous on 03/01/16 2:42.
 */

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

