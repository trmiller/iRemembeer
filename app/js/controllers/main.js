define(
	[
		'angular',
		'controllers/BeerController'
	],
	function(angular){
		'use strict';

		return angular.module('iRemembeerApp.controllers', [])
			.controller('BeerController', BeerController)
	});