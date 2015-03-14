/*globals angular */
angular.module('mathCraft').service('jsonUtilService', function () {
    'use strict';

    this.convertToArray = function (jsonObject) {
        return Object.keys(jsonObject).map(function (k) {
            return jsonObject[k];
        });
    };
});