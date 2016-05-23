(function () {
  'use strict';
  var vm, ContactController;

  /**
   * ContactController –– Handles the logic for the contact page.
   *
   * @return {void}
   */
  ContactController = function () {
    vm = this;
  };

  // Inject dependencies into the controller
  ContactController.$inject = [];

  // Register the controller to the appropriate module.
  angular.module('🐼.Pages').controller('ContactController', ContactController);
}());