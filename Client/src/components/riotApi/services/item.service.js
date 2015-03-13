/*globals angular */
angular.module('mathCraft').service('itemService', function ($q, itemResource, allItemsResource) {
    'use strict';

    this.getItem = function (id, itemListData) {
        var deferred = $q.defer();
        itemResource.get({
            id: id,
            itemListData: itemListData
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.getAllChampions = function (itemListData) {
        var deferred = $q.defer();
        allItemsResource.get({
            itemListData: itemListData
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
});