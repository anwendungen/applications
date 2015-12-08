/**
 * Created by anonymous on 09/12/15 3:40.
 */

(function() {
    'use strict';

    angular
        .module('main', [
            /* Angularjs */
            'ngMaterial',
            'ngMessages',
            'ngResource',
            'ngMessages',

            /* 3rd-party */
            'ui.router',
            'satellizer',
            'restangular',
            'ngStorage',
            'angular-loading-bar',
            'ngMdIcons',
            'toastr',
            'vAccordion',

            /* Intra-services */
            'inServices.exception',
            'inServices.logger',
            'inServices.routes'
        ]);

    angular.module('widgets', []);

    angular.module('inServices.exception', []);
    angular.module('inServices.logger', []);
    angular.module('inServices.routes', []);

})();