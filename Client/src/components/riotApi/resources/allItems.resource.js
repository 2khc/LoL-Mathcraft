/*globals angular */
angular.module('mathCraft').factory('allItemsResource', function ($resource, apiService) {
    'use strict';
    
    return $resource('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?itemListData=:itemListData&api_key=' + apiService.getApiKey());
});