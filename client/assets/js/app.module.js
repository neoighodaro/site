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
      'angular-loading-bar',
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
  appConfiguration = function ($urlProvider, $locationProvider, cfpLoadingBarProvider) {
    $urlProvider.otherwise('/');

    cfpLoadingBarProvider.includeSpinner = false;

    $locationProvider.html5Mode({ enabled: true, requireBase: true });
  };

  // Inject dependencies into the appConfiguration function...
  appConfiguration.$inject = ['$urlRouterProvider', '$locationProvider',  'cfpLoadingBarProvider'];


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
