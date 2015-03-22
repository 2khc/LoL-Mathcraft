/*global angular */
angular.module('mathCraft').controller('itemShopController', function ($scope, itemService, jsonUtilService, arrayUtilService, lodash) {
    'use strict';

    $scope.searchTagFilter = [];
    $scope.filterResults = [];
    $scope.searchResults = [];

    itemService.getAllItemInfo().then(function (data) {
        $scope.allItems = jsonUtilService.convertToArray(data);
    });

    itemService.getTree().then(function (data) {
        $scope.itemTree = data;
        console.log(data);
    });

    function filter(tags) {
        var searchIndex, intersectedItems, filterResults = [];
        for (searchIndex = 0; searchIndex < $scope.allItems.length; searchIndex += 1) {
            //intersectedItems = lodash.intersection($scope.allItems[searchIndex].tags, tags);
            intersectedItems = arrayUtilService.caseInsensitiveStringInnerJoin($scope.allItems[searchIndex].tags, tags);
            console.log(intersectedItems);
            if (intersectedItems.length === tags.length) {
                console.log($scope.allItems[searchIndex]);
                filterResults.push($scope.allItems[searchIndex]);
            }
        }
        return filterResults;
    }

    $scope.addItem = function (index) {
        $scope.ngDialogData.push($scope.allItems[index]);
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
});