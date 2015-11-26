/**
 * Created by anonymoussc on 24/11/15 3:29.
 */

(function() {
    'use strict';

    angular.module('app.controllers').controller('HeaderCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$watch(function() {
            return $rootScope.current_page;
        }, function(newPage) {
            $scope.current_page = newPage || 'Page Name';
        });

    }]);
})();