(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name app
     * @description
     * _Please update the description and dependencies._
     *
     * */
    angular.module('app.filters').filter('appFilter', function() {
        return function(input) {
            return input;
        };
    });

})();