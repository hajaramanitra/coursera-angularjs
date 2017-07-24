(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo'];
function MyInfoController(myInfo) {
  var $ctrl = this;
  $ctrl.info = myInfo;
  console.log($ctrl.info);



  $ctrl.isEmptyInfo = function () {
    for(var key in $ctrl.info) {
        if($ctrl.info.hasOwnProperty(key))
            return false;
    }
    return true;
  }


}

})();
