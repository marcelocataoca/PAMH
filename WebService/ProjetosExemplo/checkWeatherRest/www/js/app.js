// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services',])

  .run(function ($ionicPlatform, $ionicPopup) {
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

      if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {          
          $ionicPopup.confirm({
            title: "Internet desconectada",
            content: "Conecte o seu dispositivo a internet."
          }).then(function (result) {
              if (!result) {
                ionic.Platform.exitApp();
              }
            });
        }
      }
    });
  })

  .controller('checkWeatherRestCtrl', function ($scope, $http) {
    $scope.tempo = function (cep) {
      var urlApi = 'http://api.openweathermap.org/data/2.5/weather?q=Londrina&appid=efdb845f4029312911b31d2435b81f0f';
      $http.get(urlApi)
        .success(function (data) {
          var valor = data.main.temp
          var result = (valor - 273.15) * 1000000;
          result = result.toString().substring(0,2);
          $scope.endereco = result + "C";
        })
        .error(function (data, status, headers, config) {
          alert('Desculpe, serviço indisponível. Tente novamente mais tarde.')
        });
    }
  })