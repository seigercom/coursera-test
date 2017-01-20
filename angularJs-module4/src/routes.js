(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {


  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/template/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/template/categories.template.html',
    controller:'CategoriesController as cate',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/template/items.template.html',
controller:'ItemsController as itm',
    resolve:{
      items:['MenuDataService','$stateParams',function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });
$urlRouterProvider.otherwise('/');
}

})();
