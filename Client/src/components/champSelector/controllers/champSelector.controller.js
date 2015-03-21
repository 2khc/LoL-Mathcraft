/*global angular */
angular.module('mathCraft').controller('champSelectorController', function ($scope, calculateService, jsonUtilService, championService) {
    'use strict';

    console.log($scope.ngDialogData);

    championService.getAllChampionInfo().then(function (data) {
        $scope.allChampions = jsonUtilService.convertToArray(data);
    });
    
    $scope.changeChampion = function (index) {
        $scope.ngDialogData = $scope.allChampions[index];
    }
});