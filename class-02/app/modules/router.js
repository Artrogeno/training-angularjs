function config($stateProvider, $httpProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('dashboard');

    $stateProvider
    .state('main', {
        url: '/',
        abstract: true,
        controller: 'MainCtrl as vm',
        templateUrl: 'modules/commons/views/main.html'
    })
    .state('main.dashboard', {
        url: 'dashboard',
        controller: 'DashCtrl as vm',
        templateUrl: 'modules/todo/views/dash.html'
    })
    .state('main.teste1', {
        url: 'teste1',
        controller: 'Teste1Ctrl as vm',
        templateUrl: 'modules/todo/views/teste1.html'
    })
    .state('main.teste2', {
        url: 'teste2',
        controller: 'Teste2Ctrl as vm',
        templateUrl: 'modules/todo/views/teste2.html'
    });
}

angular.module('todoApp').config(config);
