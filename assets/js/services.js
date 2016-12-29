var Apps = angular.module('ApiServices', []);

Apps.factory('Auth', ['$http', function($http) {
    var urlBase = config[config.env].baseUrl + '/auth',
        service = {};

    service.on = function(_userCredentials) {
        return $http.post(urlBase + '/login', _userCredentials);
    };

    service.off = function(_userCredentials) {
        return $http.post(urlBase + '/logout', _userCredentials);
    };

    service.status = function() {
        return $http.get(urlBase + '/status');
    };

    return service;
}]);
