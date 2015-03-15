/*globals angular */
angular.module('mathCraft').service('championService', function ($q, championResource, allChampionsResource) {
    'use strict';
    var self = this;

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

    this.getAllChampionInfo = function () {
        var deferred = $q.defer();
        if (self.allChampionsInfo !== undefined) {
            deferred.resolve(self.allChampionsInfo);
        } else {
            allChampionsResource.get({
                champData: 'info'
            }, function (data) {
                deferred.resolve(data.data);
                self.allChampionsInfo = data.data;
            });
        }
        return deferred.promise;
    };

});