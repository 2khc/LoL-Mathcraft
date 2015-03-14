/*global angular */
angular.module('mathCraft').controller('toolController', function ($scope, championService, itemService, calculateService) {
    'use strict';

    $scope.champions = [];

    championService.getAllChampionInfo().then(function (data) {
        $scope.allChampions = data;
        console.log(data);
    });

    $scope.calculate = function () {
        calculateService.calculate(championService.getChampion(266, 'stats'), [itemService.getItem(3281, 'stats')]).then(function (data) {
            $scope.allChampions = data;
        });
    };

    $scope.addBlankChampion = function () {
        $scope.champions.push({});
    };

    $scope.deleteChampion = function (index) {
        $scope.champions.splice(index, 1);
    };
});