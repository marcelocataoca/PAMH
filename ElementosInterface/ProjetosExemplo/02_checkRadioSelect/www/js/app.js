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

  .controller('pesquisaDeInteresseCtrl', function ($scope, $ionicPopup, $cordovaToast) {
    var regiao;
    $scope.lista = [];
    $scope.selecionado = [];
    $scope.listaRegiao = [
      { name: 'Centro-Oeste' },
      { name: 'Nordeste' },
      { name: 'Norte' },
      { name: 'Sudoeste' },
      { name: 'Sul' }]
    $scope.regiaoSelected = {};    
    $scope.lista = [
      { text: "Hello Kitty", checked: false },
      { text: "Ben 10", checked: false },
      { text: "Rebeldes", checked: false }
    ];
    var checkedTrue = "";
    $scope.gravar = function (name, regiao) {
      checkedTrue = "";
      for (var i = 0; i < $scope.lista.length; i++) {
        if ($scope.lista[i].checked)
          checkedTrue += ", " + $scope.lista[i].text;
      }      
      $cordovaToast
        .show('Nome: ' + name + '\n Região: ' + regiao.name + '\n Idade: ' + $scope.selecionado.radio + ', TV: ' + checkedTrue, 'long', 'bottom')
        .then(function (sucess) {
          console.log("Successs");
          console.log(regiao.name);
        }, function (erro) {
          console.log("Toast erro");
        });
    }
  })