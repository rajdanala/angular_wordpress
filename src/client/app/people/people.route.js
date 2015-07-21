(function() {
    'use strict';

    angular
        .module('app.people')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'people',
                config: {
                    url: '/people',
                    templateUrl: 'app/people/people.html',
                    controller: 'PeopleController',
                    controllerAs: 'vm',
                    title: 'people',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-user"></i> People'
                    }
                }
            }
        ];
    }
})();
