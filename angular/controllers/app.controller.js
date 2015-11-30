(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name app
     *
     * @description
     * _Update the description and dependencies._
     *
     * @requires $scope
     * */
    angular.module('app.controllers').controller('AppCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$watch(function() {
            return $rootScope.title;
        }, function(newPage) {
            $scope.title = newPage || 'Application';
        });

    }]);
})();