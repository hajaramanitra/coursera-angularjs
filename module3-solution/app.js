(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController(){
  // var list = this;
  // list.isNothingFound = function(){
  //   return list.items.length = 0;
  // }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchItems = function () {
    console.log("SEARCH TERM : ", list.searchTerm);
    MenuSearchService.getMatchedMenuItems(list.searchTerm);
  }

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  }

  list.foundItems = MenuSearchService.getFoundItems();

}



MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  var found = [];

  service.getMatchedMenuItems = function(searchTerm){
    $http({
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response){
      console.log("data : ", response.data.menu_items);
      var menu_items = response.data.menu_items
      found.splice(0, found.length);
      for(var i in menu_items){
        console.log("item i : ", menu_items[i]);
        if(menu_items[i].description.indexOf(searchTerm) !== -1){
          found.push(menu_items[i]);
        }
      }

      console.log("found : ", found);
    })
      .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  };

  service.getFoundItems = function(){
    return found;
  }

  service.removeItem = function(itemIndex){
    found.splice(itemIndex, 1);
  }

  service.initializeList = function(itemIndex){
    found = [];
  }

}

})();
