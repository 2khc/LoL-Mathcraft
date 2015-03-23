/*global angular */
angular.module('mathCraft').controller('itemShopController', function ($scope, itemService, calculateService, jsonUtilService) {
    'use strict';

    itemService.getAllItemInfo().then(function (data) {
        $scope.allItems = jsonUtilService.convertToArray(data);
    });

    $scope.addItem = function (index) {
        if ($scope.ngDialogData.length >= 6) {
            return false;
        }

        console.log($scope.allItems[index]);
        $scope.ngDialogData.push($scope.allItems[index]);
        console.log($scope.ngDialogData);
        return true;
    };

    $scope.removeItem = function (index) {
        $scope.ngDialogData.splice(index, 1);
    };
});