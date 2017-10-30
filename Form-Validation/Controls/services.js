 angular.module('myApp')
.factory('dataService', function($http, $q, $log) {

            var factObj = {};

            factObj.getData = function(data) {

                var deferred = $q.defer();               
                $http.post('Models/data.json').then(function(response) {
                    deferred.resolve(response.data);//resolving
                }, function(error) {
                    return deferred.reject('Error: data not found @Fact-dataService-getData-l-12');
                })
                return deferred.promise; //Returning Promise.
            };

            return factObj;

        });
