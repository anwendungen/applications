/**
 * Created by anonymoussc on 01/12/15 23:20.
 */

(function() {
    'use strict';

    angular
        .module('app.core', [
            /* Angular modules */
            'ngMaterial',
            'ngMessages',

            /* Cross-app modules */
            /* 3rd-party modules */
            'ui.router',
            'satellizer',
            'restangular',
            'ngStorage',
            'angular-loading-bar',
            'ngMdIcons',
            'vAccordion',
        ]);

})();