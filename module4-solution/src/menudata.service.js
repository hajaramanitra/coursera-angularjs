(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){
	var service = this;

	service.getAllCategories = function(){
		var response = $http({
		      url: (ApiBasePath + "/categories.json")
		    });

		return response;
	}

	service.getItemsForCategory = function(categoryShortName){
		var response = $http({
	      	url: (ApiBasePath + "/menu_items.json"),
            params: {
		        category: categoryShortName
		      }
		    });

		return response;
	}
}
})();