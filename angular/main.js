/**
 * Created by anonymoussc on 13/11/15 9:51.
 */

(function() {
    'use strict';

    angular.module('app',
        [
            'app.config',
            'app.controllers',
            'app.directives',
            'app.factory',
            'app.filters',
            'app.services',
            'app.routes'
        ]);

    angular.module('app.config', []);
    angular.module('app.controllers', [
        'ui.router',
        'ngMaterial',
        'ngStorage',
        'restangular',
        'ngMdIcons',
        'angular-loading-bar',
        'ngMessages',
        'vAccordion'
    ]);
    angular.module('app.directives', []);
    angular.module('app.factory', []);
    angular.module('app.filters', []);
    angular.module('app.services', []);
    angular.module('app.routes', []);

})();