/*globals angular */
angular.module('mathCraft').service('arrayUtilService', function () {
    'use strict';

    function getLowestArray(array1, array2) {
        if (array1.length > array2.length) {
            return array2;
        } else {
            return array1;
        }
    }

    this.caseInsensitiveStringInnerJoin = function (array1, array2) {
        var arrayIndex1, arrayIndex2, joinAmount, currentString, innerJoin = [];
        if (!angular.isDefined(array1) || !angular.isDefined(array2)) {
            return innerJoin;
        }

        for (arrayIndex1 = 0; arrayIndex1 < array1.length; arrayIndex1 += 1) {
            joinAmount = 0;
            currentString = array1[arrayIndex1].toLowerCase();

            for (arrayIndex2 = 0; arrayIndex2 < array2.length; arrayIndex2 += 1) {
                if (currentString === array2[arrayIndex2].toLowerCase()) {
                    innerJoin.push(array2[arrayIndex2]);
                }
            }
        }
        return innerJoin;
    };
});