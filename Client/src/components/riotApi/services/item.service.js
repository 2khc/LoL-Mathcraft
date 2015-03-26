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
        var i, j, deferred = $q.defer();
        if (angular.isDefined(self.tree)) {
            deferred.resolve(self.tree);
        } else {
            allItemsResource.get({
                itemListData: 'tree'
            }, function (data) {
                data.tree.splice(6, 1);
                for (i = 0; i < data.tree.length; i += 1) {
                    for (j = 0; j < data.tree[i].tags.length; j += 1) {
                        if (angular.equals(data.tree[i].tags[j], '_SORTINDEX')) {
                            data.tree[i].tags.splice(j, 1);
                        }
                    }
                }
                deferred.resolve(data.tree);
                self.tree = data.tree;
            });
        }
        return deferred.promise;
    };
});