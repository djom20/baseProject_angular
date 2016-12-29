var Appc = angular.module('Controllers', ['ApiServices']);

Appc.controller('HomeCtrl', ['$scope', '$http', '$location', 'Auth',
    function($scope, $http, $location, Auth) {
        console.log("Init Controller HomeCtrl");

        Auth.on().success(function() {
            console.log('The user was logged correctly');
        }).error(function(error) {
            console.log('The user could not be logged');
        });
    }
]);
