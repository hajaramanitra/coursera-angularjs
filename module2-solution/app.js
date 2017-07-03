(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.removeItem = function (itemIndex) {
    try{
      ShoppingListCheckOffService.removeItemFromTobuy(itemIndex);
    }
    catch(error){
      toBuy.errorMessage = error.message;
    }
  }

  toBuy.isEmpty = ShoppingListCheckOffService.isToBuyListEmpty();
}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.errorMessage = ShoppingListCheckOffService.isBoughtListEmpty()?"Nothing bought yet.":"";
  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.isEmpty = function() {
    return ShoppingListCheckOffService.isBoughtListEmpty();
  }
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [{name: "cookies",
                      quantity: 10},
                    {name: "muffins",
                      quantity: 15},
                    {name: "donuts",
                      quantity: 6},
                    {name: "chips",
                      quantity: 8},
                    {name: "apple pies",
                      quantity: 4}];
  var boughtItems = [];


  service.getToBuyItems = function(){
    return toBuyItems;
  };

  service.getBoughtItems = function(){
    return boughtItems;
  };

  service.removeItemFromTobuy = function(itemIndex){
    //Save the item to be removed to be able to insert it in boughtItems
    var myItem = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(myItem);

    if(toBuyItems.length === 0){
      throw new Error("Everything is bought!");
    }

  };

  service.isToBuyListEmpty = function(){
    return toBuyItems.length === 0;
  }

  service.isBoughtListEmpty = function(){
    return boughtItems.length === 0;
  }
}

})();
