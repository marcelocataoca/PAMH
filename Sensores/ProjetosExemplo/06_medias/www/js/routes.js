angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider      

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('tAKEANDSHOWAPICTURE', {
    url: '/page2',
    templateUrl: 'templates/tAKEANDSHOWAPICTURE.html',
    controller: 'CameraCtrl'
  })

  .state('vIDEO', {
    url: '/video',
    templateUrl: 'templates/vIDEO.html',
    controller: 'VideoCtrl'
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1')
  
});