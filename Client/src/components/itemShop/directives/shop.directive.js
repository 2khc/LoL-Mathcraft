/*globals angular */
angular.module('mathCraft').directive('shop', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            ngDialogData: '='
        },
        templateUrl: 'components/itemShop/templates/shop.html',
        link: function (scope, element, attrs, ctrl) {

        }
    };
});