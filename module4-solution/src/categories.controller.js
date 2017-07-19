(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);

MainCategoriesController.$inject = ['items']; //route resolve
function MainCategoriesController(items) {
  var categ = this;

  console.log("Categories : ", items);
  categ.items = items.data;

  
  // var item = items[$stateParams.itemId];
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();