/*global angular */
angular.module('mathCraft').config(function ($translateProvider) {
    'use strict';
    
    $translateProvider.translations('en', {
        ATTACKER: 'Attacker',
        DEFENDERS: 'Defenders'
    });
});