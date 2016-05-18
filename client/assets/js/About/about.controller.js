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
  };

  // Inject dependencies into the controller
  AboutController.$inject = [];

  // Register the controller to the appropriate module.
  angular.module('🐼.Pages').controller('AboutController', AboutController);
}());