/**
 * Created by anonymoussc on 01/12/15 6:26.
 */

(function() {
    'use strict';

    angular
        .module('app.services')
        .service('appService', appService);

    appService.$inject = [''];

    /* @ngInject */
    function appService() {
        this.functionName = functionName;

        ////////////////

        function functionName() {
            //
        }
    }

})();

