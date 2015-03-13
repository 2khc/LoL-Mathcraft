/*global angular */
angular.module('mathCraft').controller('toolController', function ($scope, championService) {
    'use strict';

    $scope.getChampion = function () {
        championService.getChampion();
    };

    $scope.calculate = function () {
        championService.getChampion(266, 'all');
    }

    championService.getAllChampions('all').then(function (data) {
        $scope.allChampions = data;
    });

});