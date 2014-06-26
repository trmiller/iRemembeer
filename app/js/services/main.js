define(
	[
		'angular',
		'services/BeerService'
	],
	function(angular, BeerService){
		'use strict';

		angular.module('iRemembeerApp.services', [])
			.service('BeerService', BeerService);
	});