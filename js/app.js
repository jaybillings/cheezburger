var cheezApp = angular.module('cheezApp', ['ngRoute', 'cheezAppControllers', 'cheezAppServices']);

cheezApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/employees', {
			templateUrl: 'partials/employee-list.html',
			controller: 'EmployeeListCtrl'
		}).
		when('/employees/:emplId', {
			templateUrl: 'partials/employee-detail.html',
			controller: 'EmployeeDetailCtrl'
		}).
		otherwise({
			redirectTo: '/employees'
		});
}]);

var cheezAppControllers = angular.module('cheezAppControllers', []);

cheezAppControllers.controller('EmployeeListCtrl', ['$scope', '$http', 'Record',
	function($scope, $http, Record) {
		$scope.employees = Record.get();
		$scope.orderProp = 'FirstName';
		window.jsonp_callback = function(data) {
			$scope.employees = data;
		}
	}
]);

cheezAppControllers.controller('EmployeeDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.jsonp('http://fe.interview.cheezburger.com/employees/' + $routeParams.emplId)
			.success(function(data) {
			//$scope.employee = data.User;
			console.log('??');
		});
	}
]);