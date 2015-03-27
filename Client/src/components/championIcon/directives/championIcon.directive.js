/*globals angular */
angular.module('mathCraft').directive('championIcon', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            champion: '='
        },
        templateUrl: 'components/championIcon/templates/championIcon.html',
        controller: function ($scope) {
        },
        link: function (scope, element, attrs, ctrl) {

        }
    };
});