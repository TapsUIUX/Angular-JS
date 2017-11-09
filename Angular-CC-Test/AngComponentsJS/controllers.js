angular.module('myApp')
.controller('tableDataDisplay',['$scope','$log','dataService',function($scope,$log,dataService){
$scope.dataObj
$scope.dataObjVal=[];
$scope.dataObjKey=[];
$scope.dataFormated=[];
// declaring ad an object sucks cause we are reciveing an array of Object
//and that causes problem in ng-repeate.
$scope.sortOrder = false ;
$scope.sortColumnName = 'name';

dataService.getData().then(function(response){
$scope.dataObj=response;


response.forEach((el,id,arr)=>{
$scope.dataObjVal.push(Object.values(arr[id]));
  //remove duplicate keays fron the array.
  if(  !$scope.dataObjKey.some((el4,id4,arr4)=>(el4==Object.values(arr[id])[0])) )
   {$scope.dataObjKey.push( [ Object.values(arr[id])[0] ]   ); }
})
$scope.dataObjKey.sort();
//putting space for proper format
$scope.dataObjKey.forEach((el5,id5,arr5)=>{
    $scope.dataFormated.push( [el5[0],'-','-','-','-','-','-']);
})

//$log.info("before:" ,$scope.dataObjVal,$scope.dataObjKey,$scope.dataFormated)
$scope.dataObjKey.forEach((el2,id2,arr2)=>{
  $scope.dataObjVal.forEach((el3,id3,arr3)=>{
      if(el2[0]==el3[0]){
        if(el3[1]=='C1'){
       $scope.dataFormated[id2].splice(1,2,el3[1],el3[2]);
         }
         if(el3[1]=='C2'){
        $scope.dataFormated[id2].splice(3,2,el3[1],el3[2]);
          }
          if(el3[1]=='C3'){
         $scope.dataFormated[id2].splice(5,2,el3[1],el3[2]);
           }
      }
  })
})



// $log.info(response)
},function(rejected){
$log.info(rejected)});
// $scope.arrFromMyObj = Object.keys($scope.dataObj).map(function(el,id,arr) {
//   return  [+el,$scope.dataObj[el]];
// });




$scope.sortColumn = function(column){
  //if cleicked first time it will set the order to false means ASC
  //if not it will change the order.
  $scope.sortOrder = ($scope.sortColumnName == column)? !$scope.sortOrder : false ;
  $scope.sortColumnName = column;
}







}])
