var cheezApp = angular.module('cheezApp', ['ngRoute', 'cheezAppControllers', 'cheezAppServices']);

/*cheezApp.config(['$routeProvider',
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
}]);*/

var cheezAppControllers = angular.module('cheezAppControllers', []);

cheezAppControllers.controller('EmployeeListCtrl', ['$scope', 'Record',
	function($scope, Record) {
		$scope.employees = Record.fetch();
		console.log($scope.employees);
		$scope.orderProp = 'FirstName';
}]);

cheezAppControllers.controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Record',
	function($scope, $routeParams, Record) {
		$scope.employee = Record.jsonp('http://fe.interview.cheezburger.com/employees/:emplId?callback=JSON_CALLBACK',
									   {emplId: $routeParams.emplId});
}]);