/**
 * Created by anonymoussc on 03/12/15 23:09.
 */

(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];

    /* @ngInject */
    function DashboardController() {
        var vm   = this;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

