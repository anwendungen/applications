/**
 * Created by anonymoussc on 01/12/15 6:17.
 */

(function() {
    'use strict';

    angular
        .module('app.factory')
        .factory('appFactory', appFactory);

    appFactory.$inject = [''];

    /* @ngInject */
    function appFactory() {
        var service = {
            functionName: functionName
        };
        return service;

        ////////////////

        function functionName() {
            //
        }
    }

})();

