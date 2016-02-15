/**
 * theme.js
 * Created by anonymous on 03/01/16 2:42.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .config(defaultTheme)
        .config(altTheme);

    defaultTheme.$inject = ['$mdThemingProvider'];
    altTheme.$inject     = ['$mdThemingProvider'];

    /* @ngInject */
    function defaultTheme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('pink')
            .warnPalette('red');
    }

    /* @ngInject */
    function altTheme($mdThemingProvider) {
        $mdThemingProvider.theme('altTheme')
            .primaryPalette('red');
        //.accentPalette('pink')
        //.warnPalette('red');
    }

})();

