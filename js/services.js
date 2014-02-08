var cheezAppServices = angular.module('cheezAppServices', ['ngResource']);

cheezAppServices.factory('Record', ['$resource',
	function($resource) {
		return $resource('http://fe.interview.cheezburger.com/employees?callback=jsonp_callback', {}, {
			get: {method: 'JSONP', isArray: true}
		});
	}]);
