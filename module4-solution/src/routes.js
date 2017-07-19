(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Categories
  .state('categList', {
    url: '/categ-list',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'MainCategoriesController as categList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        var categories = MenuDataService.getAllCategories();
        console.log("categories : ", categories);
        return categories;
      }]
    }
  })

  // Item detail
  .state('categList.items', {
    url: '/items/{itemId}',
    templateUrl: 'src/templates/main-items.template.html',
    controller: 'ItemsController as itemsCtrl'
    // params: {
    //   itemId: null
    // },
    // resolve: {
    //   details: ['MenuDataService', function (MenuDataService, $stateParams) {
    //     console.log("$stateParam.itemId : ", $stateParams.itemId);
    //     var itemDetails = MenuDataService.getItemsForCategory($stateParams.itemId);
    //     // var itemDetails = MenuDataService.getAllCategories();
    //     console.log("itemDetails : ", itemDetails);
    //     return itemDetails;
    //   }]
    // }
  });

}

})();
