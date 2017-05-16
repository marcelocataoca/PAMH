angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('menu.bookOfPicaretation', {
        url: '/bookOfPicaretation',
        views: {
          'side-menu21': {
            templateUrl: 'templates/bookOfPicaretation.html',
            controller: 'bookOfPicaretationCtrl'
          }
        }
      })

      .state('collaborator', {
        url: '/collaborator',
        templateUrl: 'templates/collaborator.html',
        controller: 'collaboratorCtrl'
      })      

      .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })                        

    $urlRouterProvider.otherwise('/side-menu21/bookOfPicaretation')

  });