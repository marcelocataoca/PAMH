angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('ocorrenciaSqlite', {
        url: '/ocorrenciaSqlite',
        templateUrl: 'templates/ocorrenciaSqlite.html',
        controller: 'home'
      })

      .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('ocorrenciaSqlite2', {
        url: '/ocorrenciaSqlite2',
        templateUrl: 'templates/ocorrenciaSqlite2.html',
        controller: 'addOcorrencia'
      })

      .state('ocorrenciaSqlite3', {
        url: '/ocorrenciaSqlite3',
        templateUrl: 'templates/ocorrenciaSqlite3.html',
        controller: 'CtrlDados'
      })

    $urlRouterProvider.otherwise('/ocorrenciaSqlite')


  });