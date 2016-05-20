(function(){
  'use strict';
  var PandaLoadingDirective;

  /**
   * PandaLoadingDirective –– This is the directive for the website's loader.
   *
   * @return {Object}
   */
  PandaLoadingDirective = function (Pace, $window) {
    var linkFn;

    linkFn = function ($scope, elem) {
      Pace.on('done', function () {
        elem.removeClass('fade-in').addClass('fade-out');
        $window.setTimeout(function() {
          elem.addClass('hide-element');
        }, 1000);
      });
    };

    return {
      scope: {},
      link: linkFn,
      restrict: 'E',
      templateUrl: '/templates/partials/pandaLoading.html'
    };
  };

  // Inject dependencies into the directive
  PandaLoadingDirective.$inject = ['PaceService', '$window'];

  // Register the directive to the appropriate module.
  angular.module('🐼.Shared').directive('pandaLoading', PandaLoadingDirective);
}());