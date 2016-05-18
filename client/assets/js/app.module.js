(function() {
  'use strict';

  angular.module('🐼', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    //3rd Party
    'angular-loading-bar',

    // Site modules
    '🐼.Shared',
    '🐼.Pages',
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider',  'cfpLoadingBarProvider'];

  function config($urlProvider, $locationProvider, cfpLoadingBarProvider) {
    $urlProvider.otherwise('/');

    cfpLoadingBarProvider.includeSpinner = false;

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
  }

  function run() {
    FastClick.attach(document.body);
  }

  run.$inject = [];

})();
