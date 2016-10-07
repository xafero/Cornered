
var utils = angular.module('utils.service', []);

utils.factory('StringUtils', function StringUtils() {
    return {
        removeSpaces: function (value) {
            return value.replace(new RegExp('\\s', 'g'), '');
        }
    };
});

var carApp = angular.module('carApp', ['utils.service']);

carApp.config(function () {
   console.log("If you want to configure something beforehand, just do it here...");
});

carApp.value('term', 'anywhere');

carApp.run(function (term) {
   console.log("This is some "+term+" for initialization.");
});

carApp.controller('CarListController', function CarListController($scope, StringUtils) {
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
    this.doReset = function () {
        this.year = 2016;
        this.count = 1;
        alert('Your values have been ' +
                StringUtils.removeSpaces('r e s e t t e d')
                + '!');
    };
});
