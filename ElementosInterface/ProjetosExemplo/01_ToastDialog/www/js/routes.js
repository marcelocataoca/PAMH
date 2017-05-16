angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('1_ToastDialog_AStudio', {
    url: '/page17',
    templateUrl: 'templates/1_ToastDialog_AStudio.html',
    controller: '1_ToastDialog_AStudioCtrl'
  })

$urlRouterProvider.otherwise('/page17')

  

});