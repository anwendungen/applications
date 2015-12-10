/**
 * Created by anonymous on 08/12/15 17:07.
 */

(function() {
    'use strict';

    /* Application */
    angular.module('applications', ['app']);

    angular
        .module('app', [
            /* Shared */
            'main',
            'widgets',

            /* service components */
            'dashboard',
            'client',
            'jwtAuth'
        ]);

})();