/**
 * Created by anonymoussc on 13/11/15 9:51.
 */

(function() {
    'use strict';

    angular.module('applications', ['app', 'components']);

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

    angular.module('app.config', ['ngMaterial', 'angular-loading-bar']);
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
    angular.module('app.routes', [
        'components.routes'
    ]);

    angular.module('components',
        [
            'components.config',
            'components.controllers',
            'components.directives',
            'components.factory',
            'components.filters',
            'components.services',
            'components.routes'
        ]);

    angular.module('components.config', []);
    angular.module('components.controllers', []);
    angular.module('components.directives', []);
    angular.module('components.factory', []);
    angular.module('components.filters', []);
    angular.module('components.services', []);
    angular.module('components.routes', []);

    angular.module('components.routes.jwtAuth', []);

})();