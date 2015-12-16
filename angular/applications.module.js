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
            'appFoundation',
            'widgets',

            /* service components */
            'appbase',
            'client'
        ]);

})();
