(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// ItemsController.$inject = ['$stateParams', 'MenuDataService']; //route resolve
// function ItemsController($stateParams, MenuDataService) {
//   var itemsCtrl = this;

//   var promise = MenuDataService.getItemsForCategory($stateParams.itemId);

//   console.log("promise : ", promise);
//   promise.then(function(response){
//   	console.log("data : ", response.data.menu_items);
//   	itemsCtrl.list = response.data.menu_items;
//   })
//   			.catch(function (error) {
//     console.log("Something went terribly wrong.");
//   });		

// }


ItemsController.$inject = ['items', 'details']; //route resolve
function ItemsController(items, details) {
  var itemsCtrl = this;

  console.log("promise : ", details);
  itemsCtrl.list = details.data.menu_items;	

}

})();