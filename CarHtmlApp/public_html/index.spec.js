
describe('CarListControllerTests', function () {

    beforeEach(module('carApp'));

    it('should create a `car` model with 3 cars', inject(
            function ($controller) {
                var scope = {};
                var ctrl = $controller('CarListController',
                        {$scope: scope});

                expect(scope.cars.length).toBe(3);
                expect(scope.hello).toBe('Greetings');
            }
    ));
});
