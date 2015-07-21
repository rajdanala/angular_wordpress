/* jshint -W117, -W030 */
describe('dataservice', function () {

        beforeEach(function() {
            bard.appModule('app.core');
            bard.inject('$http', '$httpBackend', '$q','dataservice');

        });

        it('hello test',function() {
            expect('hello').to.equal('hello');
        });

        it('dataservice exist',function() {
            expect(dataservice).to.exist;
        });

        it('getMessageCount returns a value',function () [
            dataservice.getMessageCount().then(function(data)){
                expect(data).exist;
            }
        ]);





});
