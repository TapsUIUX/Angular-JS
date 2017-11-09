angular.module('myApp')
.factory('dataService',['$http','$log','$q',function($http,$log,$q){
factObj={}

factObj.getData = function(data){
var d = $q.defer();
$http.get("./Jsons/data.json").then(function(response){
  d.resolve(response.data);
},function(reject){
   d.reject("error occured while fetchin the data , E-Loc:L10-s.js-getdata")
})
return d.promise;
}
return factObj;
}])
