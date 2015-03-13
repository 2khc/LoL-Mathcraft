/*globals angular */
angular.module('mathCraft').factory('itemResource', function ($resource, apiService) {
    'use strict';
    
    return $resource('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item/:id?api_key=' + apiService.getApiKey());
});