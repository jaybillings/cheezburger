var cheezAppServices = angular.module('cheezAppServices', ['ngResource']);

/*cheezAppServices.factory('Record', function($http) {
	var cheezAPI = {};
	cheezAPI.fetchEmployees = function() {
		return $http({
			method: 'jsonp',
			url: 'http://fe.interview.cheezburger.com/employees?callback=JSON_CALLBACK'
		});
	}
	return cheezAPI;
});*/
cheezAppServices.factory('Record', ['$resource',
	function($resource) {
		return $resource('http://fe.interview.cheezburger.com/employees', {}, {
			fetch: {method: 'jsonp', isArray: true, responseType: 'json', done: function(data) {
				console.log("???" + data);
			}},
			//queryDetail: {method:' JSONP', params: {emplId: 'id'}, isArray: true}
		});
	}]);
