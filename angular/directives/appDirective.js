(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name app
     *
     * @description
     * _Please update the description and restriction._
     *
     * @restrict A
     * */
    angular.module('app.directives').directive('appDirective', function() {
        return {
            restrict: 'A',
            link    : function(scope, elem, attr) {

            }
        };
    });
})();