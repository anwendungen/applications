(function() {
    'use strict';

    angular.module('app.config').config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('grey')
            .warnPalette('red');
    });

})();
