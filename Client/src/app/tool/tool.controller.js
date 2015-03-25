/*global angular */
angular.module('mathCraft').controller('toolController', function ($scope, championService, itemService, calculateService, jsonUtilService, ngDialog) {
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

    $scope.openItemSelection = function (championIndex) {
        ngDialog.open({
            template: 'components/itemShop/templates/shop.html',
            data: $scope.champions[championIndex].items
        });
    };

    $scope.openChampSelection = function (championIndex) {
        ngDialog.open({
            template: 'components/champSelector/templates/champSelector.html',
            data: $scope.champions[championIndex]
        });
    };

    $scope.$on('ngDialog.opened', function (event, $dialog) {
        $dialog.find('.ngdialog-content').css('width', '80%').css('height', '100%');
    });
});