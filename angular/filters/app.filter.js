/**
 * Created by anonymoussc on 01/12/15 6:21.
 */

(function() {
    'use strict';

    angular
        .module('app.filters')
        .filter('app', app);

    function app() {
        return appFilter;

        ////////////////

        function appFilter(input) {
            return input;
        }
    }

})();

