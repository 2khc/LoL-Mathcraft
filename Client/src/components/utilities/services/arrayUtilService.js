/*globals angular */
angular.module('mathCraft').service('arrayUtilService', function () {
    'use strict';

    this.removeA = function (arr) {
        var what, a = arguments,
            L = a.length,
            ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }
});