(function(){
  'use strict';
  var vm, WorkController;
  WorkController = function () {
    vm = this;

    vm.photos = [
    	"/assets/img/work-1.jpg",
    	"/assets/img/work-2.jpg"
    ];
  };
  WorkController.$inject = [];
  angular.module('🐼.Pages').controller('WorkController', WorkController);
}());