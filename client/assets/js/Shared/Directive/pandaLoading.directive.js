(function(){
  'use strict';
  var PandaLoadingDirective;

  /**
   * PandaLoadingDirective –– This is the directive for the website's loader.
   *
   * @return {Object}
   */
  PandaLoadingDirective = function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/partials/pandaLoading.html'
    };
  };

  // Inject dependencies into the directive
  PandaLoadingDirective.$inject = [];

  // Register the directive to the appropriate module.
  angular.module('🐼.Shared').directive('PandaLoadingDirective', PandaLoadingDirective);
}());