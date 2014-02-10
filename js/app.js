var cheezApp = angular.module('cheezApp', ['ngRoute', 'cheezAppControllers', 'cheezAppServices']);

cheezApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/employees', {
                templateUrl: 'partials/employee-list.html',
                controller: 'EmployeeListCtrl'
            }).
            otherwise({
                redirectTo: '/employees',
                controller: 'EmployeeListCtrl'
            });
    }
]);

var cheezAppControllers = angular.module('cheezAppControllers', []);

cheezAppControllers.controller('EmployeeListCtrl', ['$scope', 'EmployeeList',
    function ($scope, EmployeeList) {
        // Get all employee info
        $scope.employees = EmployeeList.get();
        $scope.orderProp = 'FirstName';
        window.jsonp_callback = function (data) {
            $scope.employees = data;
        };

        // Toggle detail view
        $scope.toggleModal = function (id) {
            $scope.employee = EmployeeList.get({
                emplId: id
            });
            window.jsonp_callback = function (data) {
                $scope.employee = data;
                $(".ng-modal-dialog").show();
                $(".ng-modal-overlay").show();
            };
        };

        $scope.toggleView = function (showGrid) {
            $scope.showAsGrid = showGrid;
        };
    }
]);

cheezApp.directive('modalDialog', function () {
    return {
        restrict: 'E',
        scope: {},
        replace: true,
        transclude: true,
        link: function (scope) {
            scope.hideModal = function () {
                //scope.show = false;
                $(".ng-modal-dialog").hide();
                $(".ng-modal-overlay").hide();
            };
        },
        templateUrl: 'partials/employee-detail.html'
    };
});
