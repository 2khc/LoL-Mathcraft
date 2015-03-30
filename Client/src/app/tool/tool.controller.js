/*global angular */
angular.module('mathCraft').controller('toolController', function ($scope, $state, championService, itemService, calculateService, jsonUtilService) {
    'use strict';

    $scope.champions = [];
    $scope.test = "hi";

    championService.getAllChampionInfo().then(function (data) {
        $scope.allChampions = jsonUtilService.convertToArray(data);
    });

    itemService.getAllItemInfo().then(function (data) {
        $scope.allItems = jsonUtilService.convertToArray(data);
        console.log(data);
    });

    $scope.calculate = function () {
        calculateService.calculate(championService.getChampion(266, 'stats'), [itemService.getItem(3281, 'stats')]).then(function (data) {
            $scope.allChampions = jsonUtilService.convertToArray(data);
        });
    };

    $scope.addBlankChampion = function () {
        $scope.champions.push({
            items: []
        });
    };

    $scope.deleteChampion = function (index) {
        $scope.champions.splice(index, 1);
    };

    $scope.getEmptySlots = function (items) {
        var emptySlots = 6 - items.length;
        return new Array(emptySlots);
    };

    $scope.removeItem = function (champion, itemIndex) {
        champion.items.splice(itemIndex, 1);
    };

    $scope.goToSandbox = function () {
        $state.go("sandbox");
    };
});