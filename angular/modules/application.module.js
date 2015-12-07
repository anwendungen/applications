/**
 * Created by anonymous on 01/12/15 23:26.
 */

(function() {
    'use strict';

    angular.module('applications', ['app', 'components']);

    angular.module('app',
        [
            /* Shared modules */
            'app.core',
            /*----------------*/
            'app.config',
            'app.controllers',
            'app.directives',
            'app.filters',
            'app.services',
            'app.routes'
        ]);

    angular.module('app.config', []);
    angular.module('app.controllers', []);
    angular.module('app.directives', []);
    angular.module('app.filters', []);
    angular.module('app.services', []);
    angular.module('app.routes', [
        'components.routes'
    ]);

})();