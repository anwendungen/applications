/**
 * Created by anonymoussc on 26/11/15 5:38.
 */

(function() {
    'use strict';

    angular.module('app.controllers').controller('DashboardRightController', ['$scope', '$timeout', '$mdSidenav', '$log', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('right').close().then(function() {
                // $log.debug("close RIGHT is done");
            });
        };
    }]);
})();
