angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider      

      .state('one2Nine', {
    url: '/one2Nine',
    templateUrl: 'templates/one2Nine.html',
    controller: 'one2Nine'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('one2Nine2', {
    url: '/one2Nine2',
    templateUrl: 'templates/one2Nine2.html',
    controller: 'tela2'
  })

  .state('page', {
    url: '/page',
    templateUrl: 'templates/page.html',
    controller: 'jogar'
  })

$urlRouterProvider.otherwise('/one2Nine')

  

});