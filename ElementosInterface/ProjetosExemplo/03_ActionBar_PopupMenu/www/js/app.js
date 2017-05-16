// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

 .controller('toasts', function ($scope, $ionicPopup, $timeout, $cordovaToast) {

    $scope.toastSet = function () {
      $cordovaToast
        .show('selecionou settings', 'short', 'center')
        .then(function (sucess) {
          console.log("Toast1 abriu!");
        }, function (erro) {
          console.log("Toast1 erro");
        });
    };
    $scope.toastItem1 = function () {
      $cordovaToast
        .show('selecionou item 1', 'short', 'center')
        .then(function (sucess) {
          console.log("Toast 2!");
        }, function (erro) {
          console.log("Toast 2");
        });
    };
    $scope.toastItem2 = function () {
      $cordovaToast
        .show('selecionou item 2', 'short', 'center')
        .then(function (sucess) {
          console.log("Toast3 abriu!");
        }, function (erro) {
          console.log("Toast3 erro");
        });
    };
  })