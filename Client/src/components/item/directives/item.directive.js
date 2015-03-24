/*globals angular */
angular.module('mathCraft').directive('item', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            imageUrl: '@',
            name: '@',
            plaintext: '@'
        },
        templateUrl: 'components/item/templates/item.html',
        link: function (scope, element, attrs, ctrl) {
        }
    };
});