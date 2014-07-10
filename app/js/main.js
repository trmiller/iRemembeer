window.name = "NG_DEFER_BOOTSTRAP!";

require([
	'angular',
	'app',
	'routes',
	'bootstrap',
	'jquery'
	], function(angular, app, routes){
		'use strict';

		angular.element().ready(function(){
			angular.resumeBootstrap(app.name);
		});
	});