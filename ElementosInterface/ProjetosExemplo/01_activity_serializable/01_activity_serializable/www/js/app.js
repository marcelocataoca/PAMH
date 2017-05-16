// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ngCordova'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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


  .controller('homeCtrl', function ($scope, $location, Dados) {
    $scope.enviar = function (nome, idade, altura, peso) {
        Dados.addInfo({nome: nome, idade: idade, altura: altura, peso: peso});
      $location.path('/confirmarDados');
    }
  })


  .controller('confirmar', function ($scope, $ionicPopup, $timeout, Dados) {
    $scope.retorno = [];
    $scope.input = [];
    $scope.retorno = Dados.getInfo();
    $scope.input.nome = $scope.retorno[0].nome;
    $scope.input.idade = $scope.retorno[0].idade;
    $scope.input.altura = $scope.retorno[0].altura;
    $scope.input.peso = $scope.retorno[0].peso;

    $scope.showAlert = function () {      
      var result = $scope.input.peso / ($scope.input.altura * $scope.input.altura);
      var alertPopup = $ionicPopup.alert({
        title: 'Don\'t eat that!',
        template: 'O seu IMC é: ' + result.toFixed(2)
      });
      alertPopup.then(function (res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };
  })