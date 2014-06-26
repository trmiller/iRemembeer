define(['services'], function(){
	'use strict';

	var BeerController = function($scope){
		$scope.Beer = "Good";
	};

	return ["$scope", BeerController];
});