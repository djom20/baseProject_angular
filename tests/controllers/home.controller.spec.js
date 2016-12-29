describe('HomeCtrl function', function() {
    describe('HomeCtrl', function() {
        var $scope, $ctrl;

        beforeEach(module('App'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $ctrl = $controller('HomeCtrl', { $scope: $scope });
        }));

        it('should create "spices" model with 3 spices', function() {
            expect($scope.welcomeMessage).toBe('Init Controller HomeCtrl');
        });
    });
});
