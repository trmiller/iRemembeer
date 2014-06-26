define([
	'angular',
	'filters',
	'services',
	'controllers',
	'angularRoute',
	'uiBootstrap',
	'ngStrap',
	'ngStrapTpl',
	'loadingBar',
	'toaster'
	], function(angular){
		'use strict';

		return angular.module('iRemembeerApp', [
			'ngRoute',
			'iRemembeerApp.controllers',
			'iRemembeerApp.filters',
			'iRemembeerApp.services',
			'ui.bootstrap',
			'mgcrea.ngStrap.datepicker',
			'chieffancypants.loadingBar',
			'toaster'
		]);
	});