(function(){
  'use strict';
  var linkFn, PandaMiniSliderDirective;

  /**
   * PandaMiniSliderDirective –– This is the directive for the website's mini slider.
   *
   * @return {Object}
   */
  PandaMiniSliderDirective = function () {
    linkFn = function ($scope, elem) {
      // Stub.
    };

    return {
      link: linkFn,
      restrict: 'EA',
      templateUrl: '/templates/partials/pandaMiniSlider.html',
      scope: {
        photos: '=',
        moreLink: '@',
        interval:'@'
      }
    };
  };

  // Inject dependencies into the directive
  PandaMiniSliderDirective.$inject = [];

  // Register the directive to the appropriate module.
  angular.module('🐼.Shared').directive('pandaMiniSlider', PandaMiniSliderDirective);
}());