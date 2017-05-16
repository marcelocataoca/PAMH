angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('1_activityLife_abrirfechar', {
    url: '/page14',
    templateUrl: 'templates/1_activityLife_abrirfechar.html',
    controller: '1_activityLife_abrirfecharCtrl'
  })

  .state('1_activityLife_abrirfechar2', {
    url: '/page15',
    templateUrl: 'templates/1_activityLife_abrirfechar2.html',
    controller: '1_activityLife_abrirfechar2Ctrl'
  })

  .state('1_activityLife_abrirfechar3', {
    url: '/page16',
    templateUrl: 'templates/1_activityLife_abrirfechar3.html',
    controller: '1_activityLife_abrirfechar3Ctrl'
  })

$urlRouterProvider.otherwise('/page14')

  

});