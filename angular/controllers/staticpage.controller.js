/**
 * Created by anonymoussc on 03/12/15 23:28.
 */

(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('StaticpageController', StaticpageController);

    StaticpageController.$inject = [];

    /* @ngInject */
    function StaticpageController() {
        var vm   = this;
        vm.title = 'StaticpageController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

