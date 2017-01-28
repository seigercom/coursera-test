(function () {
"use strict";

angular.module('public')
.controller('SignController', SignController);

SignController.$inject = ['MenuService','MyinfoService'];
function SignController(MenuService,MyinfoService) {
  var reg = this;
  reg.user = {};

  reg.submit = function () {
    MenuService.getMenuItems(reg.user.menu)
    .then(function (res) {
      reg.menuinvalid = false;
      reg.submitted = true;
      MyinfoService.setInfo(reg.user);
    })
    .catch(function () {
      reg.menuinvalid = true;
    })
  };
  reg.validate = function () {
    MenuService.getMenuItem(reg.user.menu)
    .then(function (res) {
        reg.menuinvalid = false;
      //console.log(res);
    })
    .catch(function (res) {
      reg.menuinvalid = true;
    })
  }
}

})();
