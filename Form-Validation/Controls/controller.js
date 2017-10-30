 angular.module('myApp')
  .controller("mainCtrl", ['$scope', '$log', '$state', '$timeout', 'dataService', function($scope, $log, $state, $timeout, dataService) {
            $scope.formObj = {};
            $scope.dataSet = [];

            dataService.getData().then(function(response) {
                $scope.dataSet = response; // Resloving the promise
            }, function(reject) {
               // reject recived from promise
                $log.warn(reject);
            })


            // Adding data on click
            $scope.addData = function(input, inuptForm) {
                // Pushing data to array to display
                // Idealy HTTP request willbe generated to call an API to insert the data in the database        
                $scope.dataSet.push(input);
                $scope.formObj = {};
            }

        }]);
