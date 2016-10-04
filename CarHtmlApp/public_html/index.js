
var carApp = angular.module('carApp', []);

carApp.controller('CarListController', function CarListController($scope) {
    $scope.hello = 'Greetings';
    $scope.cars = [
        {
            name: "Porsche A2",
            snippet: "Cool car for fun!"
        },
        {
            name: "Audi A8",
            snippet: "Not so good, but usable."
        },
        {
            name: "VW Polo",
            snippet: "Shitty deadly car :-("
        }
    ];
});
