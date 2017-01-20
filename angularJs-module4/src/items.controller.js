(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itm = this;
  itm.items = items;
  console.log(items);
}

})();
