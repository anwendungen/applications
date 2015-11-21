/**
 * Created by anonymoussc on 20/11/15 22:38.
 */
/**
 * Created by anonymoussc on 13/11/15 9:51.
 */

(function() {
    'use strict';

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

})();