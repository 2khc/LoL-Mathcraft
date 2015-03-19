/*global angular */
angular.module('mathCraft').controller('itemShopController', function ($scope, itemService, calculateService, jsonUtilService) {
    'use strict';
    
    itemService.getAllItemInfo().then(function (data) {
        $scope.allItems = jsonUtilService.convertToArray(data);
    });
});