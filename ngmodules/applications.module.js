/**
 * applications.module.js
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
            'dashboard',
            'seneschal',
            'client'
        ]);

})();

/**
 * client.module.js
 * Created by anonymous on 09/12/15 13:12.
 */

(function() {
    'use strict';

    angular.module('client', []);

})();