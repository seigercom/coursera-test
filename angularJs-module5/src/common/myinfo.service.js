(function () {
"use strict";

angular.module('common')
.service('MyinfoService', MyinfoService);


MyinfoService.$inject = [];
function MyinfoService() {
  var service = this;

  service.setInfo = function (info) {
    service.info = info;
  };


  service.getInfo = function () {
    return service.info;
  };

}



})();
