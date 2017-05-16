// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db = null;
teste = [];

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ngCordova'])


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
        db = $cordovaSQLite.openDB({ name: "ocorrencia" });

      } else {
        db = window.openDatabase("ocorrencia", '1', 'my', 1024 * 1024 * 100);
      }
      //Para apagar dados antigos descomente a próxima linha
      // $cordovaSQLite.execute(db, "DELETE from info");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS info (id integer primary key, nome varchar(10), desc varchar(10))");
    });
  })

  .factory('Authorization', function () {

    authorization = {};
    authorization.nome = '';
    authorization.desc = '';
    return authorization;
  })

  .controller('addOcorrencia', function ($scope, $state, $cordovaSQLite, Authorization) {
    $scope.input = Authorization;
    $scope.input.name = "";
    $scope.input.desc = "";
    $scope.salvar = (function (name, desc) {
      var query = "INSERT INTO info (nome, desc) VALUES (?, ?);";
      var values = [$scope.input.name, $scope.input.desc];      
      $cordovaSQLite.execute(db, query, values).then(
        function (res) {
          console.log('INSERTED ID: ' + res.insertId);
        },
        function (err) {
          console.log('ERROR: ' + err);
        }
      ) 
      $state.go('ocorrenciaSqlite', { reload: true });
    })
  })

  .controller('home', function ($scope, $cordovaSQLite, $state) {
    
  })

  .controller('CtrlDados', function ($scope, $cordovaSQLite) {  
    $scope.lista = [];
    var query = "SELECT * FROM info";
    $cordovaSQLite.execute(db, query).then(
      function (res) {
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            var obj = res.rows.item(i);
            $scope.lista.unshift({ nome: obj.nome, desc: obj.desc });
          }          
        } else {
          console.log('No records found');
        }
      })
  })