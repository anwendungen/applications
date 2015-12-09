/**
 * Created by anonymous on 01/12/15 2:46.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$rootScope'];

    /* @ngInject */
    function AppController($scope, $rootScope) {
        $scope.$watch(function() {
            return $rootScope.title;
        }, function(newPage) {
            $scope.title = newPage || 'Application';
        });

        //var vm   = this;
        //vm.title = 'AppController';

        //activate();

        ////////////////

        /*
         function activate() {
         code
         }
         */
    }

})();
