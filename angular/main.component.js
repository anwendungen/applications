/**
 * Created by anonymoussc on 20/11/15 22:38.
 */
/**
 * Created by anonymoussc on 13/11/15 9:51.
 */

(function() {
    'use strict';

    angular.module('app.component',
        [
            'component.config',
            'component.controllers',
            'component.directives',
            'component.factory',
            'component.filters',
            'component.services',
            'component.routes'
        ]);

    angular.module('component.config', []);
    angular.module('component.controllers', []);
    angular.module('component.directives', []);
    angular.module('component.factory', []);
    angular.module('component.filters', []);
    angular.module('component.services', []);
    angular.module('component.routes', []);

})();