(function() {
  'use strict';
  var appRun, appModules, appConfiguration;

  /**
   * Returns a list of modules to be loaded into 🐼.
   *
   * @return {Array}
   */
  appModules = function () {
    return [
      'ui.router',
      'ngAnimate',
      'foundation',
      'foundation.dynamicRouting',
      'foundation.dynamicRouting.animations',
      'angular-carousel',
      '🐼.Shared',
      '🐼.Pages',
    ];
  };


  /**
   * Application configuration point.
   *
   * @param  {Object} $locationProvider
   * @param  {Object} cfpLoadingBarProvider
   * @return {void}
   */
  appConfiguration = function ($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({ enabled: true, requireBase: true });
  };

  // Inject dependencies into the appConfiguration function...
  appConfiguration.$inject = ['$urlRouterProvider', '$locationProvider'];


  /**
   * Application run.
   *
   * @return {void}
   */
  appRun = function () {
    FastClick.attach(document.body);
  };

  // Inject dependencies into the appConfiguration function...
  appRun.$inject = [];

  // Register the core module for the application
  angular.module('🐼', appModules()).config(appConfiguration).run(appRun);
})();

(function(){
	'use strict';
	angular.module('🐼.Pages', []);
}());
(function(){
	'use strict';
	angular.module('🐼.Shared', []);
}());
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
      Pace.on('start', function () {
        elem.removeClass('fade-out hide-element').addClass('fade-in');
      });

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
      $scope.showLogo = true;
      // $scope.$location = $location;
      // $scope.$watch('$location.path()', function(locationPath) {
      //   $scope.showLogo = (locationPath === '/' ? false : true);
      // });
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
(function(){
	'use strict';
	var Pace, PaceService;

	/**
	 * PaceService –– Pace as a Service.
	 *
	 * @param  {Object}
	 * @return {void}
	 */
	PaceService = function ($window) {
		Pace = $window.Pace;
		delete $window.Pace;
		return Pace;
	};

	PaceService.$inject = ['$window'];

	angular.module('🐼.Shared').factory('PaceService', PaceService);
}());
(function () {
  'use strict';
  var vm, AboutController;

  /**
   * AboutController –– Handles the logic for the about page.
   *
   * @return {void}
   */
  AboutController = function () {
    vm = this;

    vm.photos = [
      '/assets/img/neo-photo-1.png',
      '/assets/img/neo-photo-3.png',
      '/assets/img/neo-photo-4.png',
      '/assets/img/neo-photo-2.png'
    ];
  };

  // Inject dependencies into the controller
  AboutController.$inject = [];

  // Register the controller to the appropriate module.
  angular.module('🐼.Pages').controller('AboutController', AboutController);
}());
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
    vm.available = true;
  };

  // Inject dependencies into the controller
  ContactController.$inject = [];

  // Register the controller to the appropriate module.
  angular.module('🐼.Pages').controller('ContactController', ContactController);
}());
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
(function(){
  'use strict';
  var vm, WorkController;
  WorkController = function () {
    vm = this;

    vm.photos = [
    	"/assets/img/work-1.jpg",
    	"/assets/img/work-2.jpg"
    ];
  };
  WorkController.$inject = [];
  angular.module('🐼.Pages').controller('WorkController', WorkController);
}());
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