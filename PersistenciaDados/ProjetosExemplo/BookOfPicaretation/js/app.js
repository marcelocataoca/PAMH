// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db = null;
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ngCordova'])

  .config(function ($ionicConfigProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  })

  .run(function ($ionicPlatform, $cordovaSQLite) {
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

      if (window.cordova) {
        db = $cordovaSQLite.openDB({ name: "picaretation", location:'default'});

      } else {
        db = window.openDatabase("picaretation", '1', 'my', 1024 * 1024 * 100);
      }
      // $cordovaSQLite.execute(db, "DELETE from collaborator");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS collaborator (id integer primary key, nome varchar(10), tel varchar(12), email varchar(25))");
    });
  })
  
  

  .controller('bookOfPicaretationCtrl', function ($scope, $cordovaSQLite, $ionicPlatform ) {    

    $scope.show = function () {
    $scope.lista = [];      
      var query = "SELECT * FROM collaborator ORDER BY nome ASC";
      $cordovaSQLite.execute(db, query).then(
        function (res) {
          if (res.rows.length > 0) {            
            for (var i = 0; i < res.rows.length; i++) {
              var obj = res.rows.item(i);
              $scope.lista.push({ nome: obj.nome });
            }
          } else {
            console.log('No records found');
          }
        })
    }
  })
  .controller('menuCtrl', function ($scope, $location) {
    $scope.exitApp = function () {
      navigator.app.exitApp();
    }
  })

  .controller('collaboratorCtrl', function ($scope, $state, $cordovaSQLite, $ionicPlatform) {
    $scope.input = [];        
    $scope.add = function (name, phone, email) {
      var query = "INSERT INTO collaborator (nome, tel, email) VALUES (?, ?, ?);";
      var values = [name, phone, email];
      $cordovaSQLite.execute(db, query, values).then(
        function (res) {
          console.log('INSERTED ID: ' + res.insertId);
        },
        function (err) {
          console.log(err);
        }
      )
      $scope.input.name = "";
      $scope.input.phone = "";
      $scope.input.phone = null;
      $scope.input.email = "";
      $state.go('menu.bookOfPicaretation', { reload: true });
    }
  })