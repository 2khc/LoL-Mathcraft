/*globals angular */
angular.module('mathCraft').config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider.state('sandbox', {
        name: 'sandbox',
        url: '/sandbox',
        templateUrl: 'app/sandbox/sandbox.html',
        controller: 'sandboxController'
    });
});