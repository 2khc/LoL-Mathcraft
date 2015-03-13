/*globals angular */
angular.module('mathCraft').factory('allChampionsResource', function ($resource, apiService) {
    'use strict';
    
    return $resource('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=:champData&api_key=' + apiService.getApiKey());
});