/**
 * Created by anonymoussc on 24/11/15 3:29.
 */

(function() {
    'use strict';

    angular.module('app.controllers').controller('RightCtrl', ['$scope', '$timeout', '$mdSidenav', '$log', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('right').close()
                .then(function() {
                    $log.debug("close RIGHT is done");
                });
        };
    }]);
})();
