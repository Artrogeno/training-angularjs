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
    .state('main.profile', {
        url: 'profile',
        controller: 'ProfileCtrl as vm',
        templateUrl: 'modules/commons/views/profile.html'
    });
}

angular.module('todoApp').config(config);
