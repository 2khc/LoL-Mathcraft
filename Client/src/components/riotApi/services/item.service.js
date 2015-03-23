/*globals angular */
angular.module('mathCraft').service('itemService', function ($q, itemResource, allItemsResource) {
    'use strict';
    var self = this;

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

    this.getAllItems = function (itemListData) {
        var deferred = $q.defer();
        allItemsResource.get({
            itemListData: itemListData
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.getAllItemInfo = function () {
        var deferred = $q.defer();
        if (angular.isDefined(self.allItemsInfo)) {
            deferred.resolve(self.allItemsInfo);
        } else {
            allItemsResource.get({
                itemListData: 'all'
            }, function (data) {
                deferred.resolve(data.data);
                self.allItemsInfo = data.data;
            });
        }
        return deferred.promise;
    };

    this.getTree = function () {
        var deferred = $q.defer();
        if (angular.isDefined(self.tree)) {
            deferred.resolve(self.tree);
        } else {
            allItemsResource.get({
                itemListData: 'tree'
            }, function (data) {
                deferred.resolve(data.tree);
                self.tree = data.tree;
            });
        }
        return deferred.promise;
    };
});