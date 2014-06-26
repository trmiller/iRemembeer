define(['angular', 'app'], function(angular, app){
	'use strict';

	return app.config(['$routeProvider'], function($routeProvider){
		$routeProvider.when('/beer', {
			templateUrl: 'views/beer.html',
			controller: 'BeerController'
		});
	})
});