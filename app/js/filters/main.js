define(['angular'], function(angular){
	'use strict';

	angular.module('iRemembeerApp.filters', [])
		.filter('truncateWithEllipsis', function(){
			return function(text, scope){
				if(text){
					return text.substring(0, 5) + '...';
				}
			};
		});
	});