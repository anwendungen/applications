(function() {
    'use strict';

    angular
        .module('app.config')
        .config(theming);

    theming.$inject = ['$mdThemingProvider'];

    /* @ngInject */
    function theming($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('pink')
            .warnPalette('red');
    }

})();

