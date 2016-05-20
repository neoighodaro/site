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