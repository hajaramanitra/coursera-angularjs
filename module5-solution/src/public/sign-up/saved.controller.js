(function () {
"use strict";

angular.module('public')
.controller('SaveInfoController', SaveInfoController);

SaveInfoController.$inject = ['categs', '$stateParams'];
function SaveInfoController(categs, $stateParams) {
  var $ctrl = this;
  $ctrl.menuItems = categs;
  $ctrl.categ = $stateParams.category;
  console.log("Exit SaveInfoController. Categs : ", $ctrl.info);

}

})();