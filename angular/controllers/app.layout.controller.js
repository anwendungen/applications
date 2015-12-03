/**
 * Created by anonymoussc on 03/12/15 22:53.
 */

(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('AppLayoutController', AppLayoutController);

    AppLayoutController.$inject = [];

    /* @ngInject */
    function AppLayoutController() {
        var vm   = this;
        vm.title = 'AppLayoutController';

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

