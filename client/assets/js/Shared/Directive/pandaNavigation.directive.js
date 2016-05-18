(function(){
  'use strict';
  var PandaNavigationDirective;

  /**
   * PandaNavigationDirective –– This is the directive that handles the navigation
   * bar of the website.
   *
   * @param  {Object} $location
   * @param  {Object} $stateParams
   * @return {Object}
   */
  PandaNavigationDirective = function ($location, $stateParams) {
    var linkFn;

    /**
     * Function run when directive is being linked.
     *
     * @param  {Object} $scope
     * @return {void}
     */
    linkFn = function ($scope) {
      $scope.$location = $location;
      $scope.$watch('$location.path()', function(locationPath) {
        $scope.showLogo = (locationPath === '/' ? false : true);
      });
    };

    return {
      scope: {},
      link: linkFn,
      restrict: 'E',
      templateUrl: '/templates/partials/pandaNavigation.html'
    };
  };

  // Inject dependencies into the directive
  PandaNavigationDirective.$inject = ['$location', '$stateParams'];

  // Register the directive to the appropriate module.
  angular.module('🐼.Shared').directive('pandaNavigation', PandaNavigationDirective);
}());