var cheezAppServices = angular.module('cheezAppServices', ['ngResource']);

cheezAppServices.factory('EmployeeList', ['$resource',
    function ($resource) {
        return $resource(
            'http://fe.interview.cheezburger.com/employees/:emplId?callback=jsonp_callback',
            { emplId: '@emplId' },
            { get: {method: 'JSONP', isArray: true }}
        );
    }
]);