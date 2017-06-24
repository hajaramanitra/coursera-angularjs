(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.lunchesRaw = "";
  $scope.status = "";

  $scope.checkIfTooMuch = function () {
    let lunches = $scope.lunchesRaw;
    if(lunches.length > 0){
      let lunchList = lunches.split(",");
      if(lunchList.length > 3){
        $scope.status = "Too much!";
      }else{
        $scope.status = "Enjoy!";
      }
    }else{
      $scope.status = "Please enter data first";
    }
  };
}

})();
