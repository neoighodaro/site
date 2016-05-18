(function(){
  'use strict';
  var PandaFooterDirective;
  PandaFooterDirective = function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/partials/pandaFooter.html'
    };
  };

  PandaFooterDirective.$inject = [];
  angular.module('🐼.Shared').directive('pandaFooter', PandaFooterDirective);
}());