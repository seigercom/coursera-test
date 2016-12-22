(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.name=null;
  $scope.state=null;
  $scope.font=null;
  $scope.check = function(){
    if(!$scope.name){
        $scope.state="Please enter data first!";
        $scope.font="red";
    }else{

    var item = $scope.name.split(",");

    if(item.length<=3){
      $scope.state="Enjoy!";
      $scope.font="green";
    }else if(item.length>3){
      $scope.state="Too much!";
      $scope.font="green";
    }}

  };
}


})();
