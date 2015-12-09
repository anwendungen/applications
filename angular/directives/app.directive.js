/**
 * Created by anonymous on 01/12/15 6:15.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .directive('appDirective', appDirective);

    appDirective.$inject = [''];

    /* @ngInject */
    function appDirective() {
        var directive = {
            bindToController: true,
            controller      : AppDirectiveController,
            controllerAs    : 'vm',
            link            : link,
            restrict        : 'A',
            scope           : {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    AppDirectiveController.$inject = [''];

    /* @ngInject */
    function AppDirectiveController() {

    }

})();

