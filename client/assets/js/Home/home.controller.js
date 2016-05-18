(function () {
  'use strict';
  var vm, HomeController;

  /**
   * HomeController –– Handles the logic for the homepage.
   *
   * @return {void}
   */
  HomeController = function () {
  	vm = this;
  };

  // Inject dependencies into the controller
  HomeController.$inject = [];

  // Register the controller to the appropriate module.
  angular.module('🐼.Pages').controller('HomeController', HomeController);
}());