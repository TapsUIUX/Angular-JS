angular.module('myApp')
  .controller("mainCtrl", ['$scope', '$log', '$state', '$timeout', 'dataService', function($scope, $log, $state, $timeout, dataService) {
            $scope.formObj = {};
            $scope.dataSet = [];

           // dataService.getData().then(function(response) {
             //   $scope.dataSet = response; // Resloving the promise
            //}, function(reject) {
               // reject recived from promise
            //    $log.warn(reject);
           // })
      
      
     // testing Async
      
      async function getDataNow(){          
            var response = await dataService.getData(); 
            $scope.dataSet = response
            console.log( "DATA" ,response);
            $scope.$digest();
        }
      
//          const dataNew = $async(function*() {
//	     $scope.dataSet = yield users.getActiveUser();	 
//           }); 
//      
      
      
      
      
      
      
      getDataNow();      
      console.log( "DATA After");
      
      
      
      


            // Adding data on click
            $scope.addData = function(input, inuptForm) {
                // Pushing data to array to display
                // Idealy HTTP request willbe generated to call an API to insert the data in the database        
                $scope.dataSet.push(input);
                $scope.formObj = {};
            }

        }]);
