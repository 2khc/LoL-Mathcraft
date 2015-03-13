/*globals angular */
angular.module('app').service('championService', function ($http) {
    'use strict';
    var apiKey = 'e511e298-0729-48e1-9f2c-20639de4741a';

    this.getChampion = function () {
        $http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/266?champData=all&api_key=' + apiKey).success(function (data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(data);
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };
});