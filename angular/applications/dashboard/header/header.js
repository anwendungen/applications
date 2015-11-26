/**
 * Created by anonymoussc on 26/11/15 4:00.
 */

(function() {
    'use strict';

    angular.module('app.controllers').controller('DashboardHeaderCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$watch(function() {
            return $rootScope.current_page;
        }, function(newPage) {
            $scope.current_page = newPage || 'Page Name';
        });

    }]);
})();