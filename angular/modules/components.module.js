/**
 * Created by anonymoussc on 01/12/15 23:25.
 */

(function() {
    'use strict';

    angular.module('components',
        [
            'app.core',
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
    angular.module('components.routes', [
        'components.routes.jwtAuth'
    ]);

    angular.module('components.routes.jwtAuth', []);

})();