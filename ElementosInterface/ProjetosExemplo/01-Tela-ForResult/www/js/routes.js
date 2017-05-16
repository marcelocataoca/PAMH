angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider      

      .state('menu.1_activity_forResult', {
    url: '/1_activity_forResult',
    cache: false,    
    views: {
      'side-menu21': {
        templateUrl: 'templates/1_activity_forResult.html',
        controller: '1_activity_forResultCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })    

  .state('page', {
    url: '/page',
    cache: false,
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/1_activity_forResult')
  
});