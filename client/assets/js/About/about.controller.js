(function () {
  'use strict';
  var vm, AboutController;

  /**
   * AboutController –– Handles the logic for the about page.
   *
   * @return {void}
   */
  AboutController = function () {
    vm = this;

    vm.photos = [
      '/assets/img/neo-photo-1.png',
      '/assets/img/neo-photo-3.png',
      '/assets/img/neo-photo-4.png',
      '/assets/img/neo-photo-2.png'
    ];
  };

  // Inject dependencies into the controller
  AboutController.$inject = [];

  // Register the controller to the appropriate module.
  angular.module('🐼.Pages').controller('AboutController', AboutController);
}());