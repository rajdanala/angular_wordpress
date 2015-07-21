(function () {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function PeopleController($q, dataservice, logger) {
        var vm = this;
        vm.people = [];
        getPeople();
        function getPeople() {
            dataservice.getPeople()
                .then(function(people) {
                    vm.people = people;
                    logger.success('got some people');
                });
        }
    }
})();
