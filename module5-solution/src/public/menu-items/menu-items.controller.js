(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems', '$stateParams'];
function MenuItemsController(menuItems, $stateParams) {
  var $ctrl = this;
  $ctrl.categ = $stateParams.category;
  $ctrl.menuItems = menuItems;
}

})();
