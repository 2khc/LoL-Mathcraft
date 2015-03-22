/*global angular */
angular.module('mathCraft').controller('itemShopController', function ($scope, itemService, jsonUtilService) {
    'use strict';

    console.log($scope.ngDialogData);

    itemService.getAllItemInfo().then(function (data) {
        $scope.allItems = jsonUtilService.convertToArray(data);
    });

    $scope.addItem = function (index) {
        $scope.ngDialogData.push($scope.allItems[index]);
    };

    $scope.search = function () {
        var searchIndex;
        $scope.searchResults = [];
        for (searchIndex = 0; searchIndex < $scope.allItems.length; searchIndex += 1) {
            if (angular.lowercase($scope.allItems[searchIndex].name).indexOf(angular.lowercase($scope.searchQuery)) > -1) {
                $scope.searchResults.push($scope.allItems[searchIndex]);
            }
        }
    };
});