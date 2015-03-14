/*global angular */


angular.module('mathCraft').config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider.state('root', {
        abstract: true,
        name: '',
        url: '',
        views: {
            'root': {
                templateUrl: '../root/root.partial.html'
            },
            'header@root': {
                templateUrl: '../root/header.partial.html'
            },
            'footer@root': {
                templateUrl: '../root/footer.partial.html'
            }
        }
    });
    //$urlRouterProvider.otherwise('home');
});