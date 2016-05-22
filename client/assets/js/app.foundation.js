(function() {
  'use strict';

  // imports all components and dependencies under a single namespace
  // ===============
  // For some strange reason Foundation thinks its cool to force us
  // to use all the components, ergo i had to import just the ones i need.

  angular.module('foundation', [
    'foundation.core',
    'foundation.mediaquery',
    // 'foundation.accordion',
    // 'foundation.actionsheet',
    // 'foundation.common',
    // 'foundation.iconic',
    // 'foundation.interchange',
    // 'foundation.modal',
    // 'foundation.notification',
    // 'foundation.offcanvas',
    // 'foundation.panel',
    // 'foundation.popup',
    // 'foundation.tabs'
  ]);

})();
