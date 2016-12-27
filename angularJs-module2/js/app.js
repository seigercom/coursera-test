(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var tb = this;
  tb.list = ShoppingListCheckOffService.gettbitems();
  tb.buy = function(itemIdex){
    ShoppingListCheckOffService.buy(tb.list[itemIdex].name,tb.list[itemIdex].quantity,itemIdex);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var ab = this;
  ab.list = ShoppingListCheckOffService.getabitems();
}

function ShoppingListCheckOffService() {
  var service = this;

  //list of tobuy list
  var tbitems = [{name:"cookies",quantity:10}
              ,{name:"apples",quantity:5},
              {name:"banana",quantity:6},
              {name:"pie",quantity:2},
              {name:"milk",quantity:3}];

  //list of alreadybought list

  var abitems = [];

  service.buy = function (itemname,quantity,itemIdex) {
    var item = {
      name: itemname,
      quantity: quantity
    };
    tbitems.splice(itemIdex,1);
    abitems.push(item);
  };

  service.gettbitems = function(){
    return tbitems;
  };

  service.getabitems = function(){
    return abitems;
  };
}

})();
