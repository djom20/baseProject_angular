var Appc = angular.module('Controllers', ['ApiServices']);

Appc.controller('HomeCtrl', ['$scope', '$http', '$location', 'Auth',
    function($scope, $http, $location, Auth) {
        $scope.welcomeMessage = 'Init Controller HomeCtrl';

        console.log($scope.welcomeMessage);

        Auth.on().success(function() {
            console.log('The user was logged correctly');
        }).error(function(error) {
            console.log('The user could not be logged');
        });
    }
]);
