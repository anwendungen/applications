/**
 * Created by anonymous on 03/12/15 22:53.
 */

(function() {
    'use strict';

    angular
        .module('app')
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

