/**
 * Created by anonymoussc on 18/11/15 17:31.
 */

(function() {
    'use strict';

    angular.module('app.routes').run(function($rootScope, $mdSidenav) {
        $rootScope.$on("$stateChangeStart", function(event, toState) {

            if (toState.data && toState.data.pageName) {
                $rootScope.current_page = toState.data.pageName;
            }

        });
        $rootScope.$on("$viewContentLoaded", function(event, toState) {
            window.Prism.highlightAll();
        });
    });

})();
