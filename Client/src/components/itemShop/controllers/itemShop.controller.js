/*global angular */
angular.module('mathCraft').controller('itemShopController', function ($scope, itemService, jsonUtilService) {
    'use strict';

    console.log($scope.ngDialogData);

    itemService.getAllItemInfo().then(function (data) {
        $scope.allItems = jsonUtilService.convertToArray(data);
    });

    $scope.addItem = function (index) {
        $scope.ngDialogData.push($scope.allItems[index]);
    }
});