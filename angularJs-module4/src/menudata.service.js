(function () {
'use strict';

angular.module('Data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method:'GET',
      url:'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function(data) {
    //  console.log(data);
    console.log(data.data);
      return data.data;
    })
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method:'GET',
      url:' https://davids-restaurant.herokuapp.com/menu_items.json',
      params:{category:categoryShortName}
    }).then(function(res) {
      //console.log(data);
      return res.data.menu_items;
    })
  };

}


})();
