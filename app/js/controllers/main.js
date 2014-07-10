define(
	[
		'angular',
		'controllers/BeerController'
	],
	function(angular, BeerController){
		'use strict';

		return angular.module('iRemembeerApp.controllers', [])
			.controller('BeerController', BeerController)
	});