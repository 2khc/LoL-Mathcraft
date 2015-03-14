/*globals angular */
angular.module('mathCraft').service('calculateService', function ($q, calculationResource) {
    'use strict';

    this.calculate = function (champion, items) {
        var deferred = $q.defer();
        calculationResource.save({
            champion: champion,
            items: items
        }, function () {
            deferred.resolve();
        });
        return deferred.promise;
    };
});