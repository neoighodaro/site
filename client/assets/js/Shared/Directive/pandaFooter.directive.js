(function(){
  'use strict';
  var PandaFooterDirective;

  /**
   * PandaFooterDirective –– This is the directive for the footer section of
   * the website.
   *
   * @return {Object}
   */
  PandaFooterDirective = function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/partials/pandaFooter.html'
    };
  };

  // Inject dependencies into the directive
  PandaFooterDirective.$inject = [];

  // Register the directive to the appropriate module.
  angular.module('🐼.Shared').directive('pandaFooter', PandaFooterDirective);
}());