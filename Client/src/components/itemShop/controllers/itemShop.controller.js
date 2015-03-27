/*global angular */
angular.module('mathCraft').controller('itemShopController', function ($scope, itemService, jsonUtilService, arrayUtilService, lodash) {
    'use strict';

    $scope.searchTagFilter = [];
    $scope.filterResults = [];
    $scope.searchResults = [];
    $scope.emptyItemSlots = [];

    itemService.getAllItemInfo().then(function (data) {
        $scope.allItems = jsonUtilService.convertToArray(data);
    });

    itemService.getTree().then(function (data) {
        $scope.itemTree = data;
    });

    function filter(tags) {
        var searchIndex, intersectedItems, filterResults = [];
        for (searchIndex = 0; searchIndex < $scope.allItems.length; searchIndex += 1) {
            intersectedItems = arrayUtilService.caseInsensitiveStringInnerJoin($scope.allItems[searchIndex].tags, tags);
            if (intersectedItems.length === tags.length) {
                filterResults.push($scope.allItems[searchIndex]);
            }
        }
        return filterResults;
    }
    
    function calculateEmptyItemSlots() {
        var index, emptySlotCount = 6 - $scope.ngDialogData.length;
        $scope.emptyItemSlots = [];
        for (index = 0; index < emptySlotCount; index += 1) {
            $scope.emptyItemSlots.push({});
        }
    }

    $scope.addItem = function (index) {
        if ($scope.ngDialogData.length >= 6) {
            return false;
        }

        console.log($scope.allItems[index]);
        $scope.ngDialogData.push($scope.allItems[index]);
        calculateEmptyItemSlots();
        return true;
    };

    $scope.changeFilter = function (tag, checked) {
        if (checked) {
            $scope.searchTagFilter.push(tag);
        } else {
            lodash.remove($scope.searchTagFilter, function (n) {
                return n === tag;
            });
        }
        if ($scope.searchTagFilter.length === 0) {
            return;
        }
        $scope.filterResults = filter($scope.searchTagFilter);
        //console.log($scope.filterResults);
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
    
    calculateEmptyItemSlots();
});