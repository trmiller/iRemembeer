define(['angular'], function(angular){
	'use strict';

	var BeerService = function($http){
		var self = this;

		self.getBeer = function(){
			return "oh yea";
		};
	};
	return ["$http", BeerService];
});