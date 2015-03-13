/*globals angular */
angular.module('mathCraft').service('championService', function ($q, championResource, allChampionsResource) {
    'use strict';

    this.getChampion = function (id, champData) {
        var deferred = $q.defer();
        championResource.get({
            id: id,
            champData: champData
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.getAllChampions = function (champData) {
        var deferred = $q.defer();
        allChampionsResource.get({
            champData: champData
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
});