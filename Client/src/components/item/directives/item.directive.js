/*globals angular */
angular.module('mathCraft').directive('item', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            imageUrl: '@',
            name: '@',
            plaintext: '@',
            description: '=?'
        },
        templateUrl: 'components/item/templates/item.html',
        controller: function ($scope) {
            $scope.description = $scope.description || true;
        },
        link: function (scope, element, attrs, ctrl) {

        }
    };
});