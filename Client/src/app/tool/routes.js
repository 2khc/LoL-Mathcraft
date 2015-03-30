/*globals angular */
angular.module('mathCraft').config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider.state('tool', {
        name: 'tool',
        url: '/tool',
        templateUrl: 'app/tool/tool.html',
        controller: 'toolController'
    });
});