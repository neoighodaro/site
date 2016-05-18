(function(){
  'use strict';
  var linkFn, PandaNavigationDirective;
  PandaNavigationDirective = function ($location, $stateParams) {
    linkFn = function ($scope) {
      $scope.$location = $location;
      $scope.$watch('$location.path()', function(path) {
        $scope.showLogo = (path === '/' ? false : true);
      });
    };

    return {
      scope: {},
      link: linkFn,
      restrict: 'E',
      templateUrl: '/templates/partials/pandaNavigation.html'
    };
  };

  PandaNavigationDirective.$inject = ['$location', '$stateParams'];
  angular.module('🐼.Shared').directive('pandaNavigation', PandaNavigationDirective);
}());