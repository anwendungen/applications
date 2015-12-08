/**
 * Created by anonymous on 01/12/15 23:20.
 */

(function() {
    'use strict';

    angular
        .module('app.core', [
            /* Angular modules */
            'ngMaterial',
            'ngMessages',
            'ngResource',
            'ngMessages',

            /* Cross-app modules */
            'blocks.exception',
            'blocks.logger',
            'blocks.routes',
            /* 3rd-party modules */
            'ui.router',
            'satellizer',
            'restangular',
            'ngStorage',
            'angular-loading-bar',
            'ngMdIcons',
            'toastr',
            'vAccordion'
        ]);

    angular.module('blocks.exception', []);
    angular.module('blocks.logger', []);
    angular.module('blocks.routes', []);

})();