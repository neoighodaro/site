(function () {
  'use strict';
  var vm, PandaController;

  /**
   * PandaController –– This is the base controller that is a parent of all
   * other controllers.
   *
   * @return {void}
   */
  PandaController = function () {
    vm = this;
  };

  // Inject dependencies into the controller
  PandaController.$inject = [];

  // Register the controller to the appropriate module.
  angular.module('🐼.Shared').controller('PandaController', PandaController);
}());