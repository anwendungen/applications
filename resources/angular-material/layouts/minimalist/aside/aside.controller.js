/**
 * aside.controller
 * Created by anonymous on 28/02/16 11:19.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('AsideController', AsideController);

    AsideController.$inject = ['$timeout', '$mdSidenav', '$log'];

    /* @ngInject */
    function AsideController($timeout, $mdSidenav, $log) {
        var vm   = this;

        vm.close = function () {
            $mdSidenav('right').close().then(function () {
                // $log.debug("close RIGHT is done");
            });
        };

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();
