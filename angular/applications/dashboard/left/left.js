/**
 * Created by anonymoussc on 26/11/15 4:24.
 */

(function() {
    'use strict';

    angular.module('app.controllers').controller('DashboardLeftController', ['$scope', '$timeout', '$mdSidenav', '$log', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('left').close().then(function() {
                // $log.debug("close LEFT is done");
            });
        };
    }]);
})();
