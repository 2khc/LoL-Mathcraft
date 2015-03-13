/*global angular */
angular.module('app').controller('builderController', function ($scope, championService) {
    'use strict';
    
    $scope.getChampion = function () {
        championService.getChampion();
    };
});