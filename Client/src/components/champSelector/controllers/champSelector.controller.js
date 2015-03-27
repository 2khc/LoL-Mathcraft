/*global angular */
angular.module('mathCraft').controller('champSelectorController', function ($scope, calculateService, jsonUtilService, championService) {
    'use strict';

    $scope.searchResults = [];

    championService.getAllChampionInfo().then(function (data) {
        $scope.allChampions = jsonUtilService.convertToArray(data);
    });

    $scope.changeChampion = function (champion) {
        $scope.champion.champion = champion;
    };

    $scope.search = function () {
        var searchIndex;
        $scope.searchResults = [];
        for (searchIndex = 0; searchIndex < $scope.allChampions.length; searchIndex += 1) {
            if (angular.lowercase($scope.allChampions[searchIndex].name).indexOf(angular.lowercase($scope.searchQuery)) > -1) {
                $scope.searchResults.push($scope.allChampions[searchIndex]);
            }
        }
    };
});