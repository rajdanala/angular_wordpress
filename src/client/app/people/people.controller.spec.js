/* jshint -W117, -W030 */
describe('PeopleController', function () {
    describe('state', function () {
        var controller;
        var people = mockData.getMockPeople(); //fake people array

        beforeEach(function() {
            module('app.people', bard.fakeToastr);
            bard.inject('$controller', '$log', '$q', '$rootScope');
            var ds = {
                getPeople: function() {
                    return $q.when(people);
                }
            };
            controller  = $controller('PeopleController',{
                dataservice: ds
            });
        });



        bard.verifyNoOutstandingHttpRequests();


        it('should have empty people array before activation',function() {
            expect(controller.people).to.exist;
        });

        it('should have  people after activation',function() {
            $rootScope.$apply();
            expect(controller.people).to.have.length.above(0);
        });

//        it('should map state dashboard to url / ', function() {
//            expect($state.href('dashboard', {})).to.equal('/');
//        });

    });
});
