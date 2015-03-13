/*global angular */
angular.module('mathCraft').config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider.state('about', {
        name: 'about',
        url: '/about',
        templateUrl: 'app/about/about.html'
    });
});