/*globals angular */
angular.module('mathCraft').directive('champSelector', function () {
    'use strict';
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            champion: '='
        },
        templateUrl: 'components/champSelector/templates/champSelector.html',
        link: function (scope, element, attrs, ctrl) {

        }
    };
});