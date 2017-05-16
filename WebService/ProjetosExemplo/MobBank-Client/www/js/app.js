// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db = null;
var transactions = [];
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ngCordova'])

  .run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)''

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

  .factory('Authorization', function () {

    authorization = {};
    authorization.nome = '';
    authorization.valor = '';
    return authorization;
  })

  .controller('mobBankClient', function(){

  })

  .controller('menu', function ($scope, $state) {
  })

  .controller('createAccount', function ($scope, $state, Authorization) {
    var head = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    $scope.input = Authorization;    
    $scope.gravar = (function (num, nome, valor) {
      var account = {
        number: num,
        clientName: nome,
        balance: valor
      }
      $.ajax({
        url: 'http://localhost:4000/account/',
        type: 'POST',
        headers: head,
        dataType: 'json',
        data: JSON.stringify(account),
        success: function (response) {          
          console.log("Add com sucesso!");
        },
        error: function (response) {
          console.log(response);
        }
      });
      $state.go('mobBankClient', { reload: true });
    })
  })

  .controller('getBalance', function ($scope, $state, $cordovaSQLite) {
    var head = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    $scope.procurar = (function (num) {
      $scope.listaAccount = [];
      $.ajax({
        url: 'http://localhost:4000/account/' + num,
        type: 'GET',
        headers: head,
        dataType: 'json',
        success: function (response) {
          $scope.listaAccount.push({
            id: response.number,
            nome: response.clientName,
            valor: response.balance
          })
          $scope.id = "";
          $scope.nome = "";
          $scope.valor = "";
          $scope.$apply();
        },
        function(response) {
          console.log(response);
        }
      });
    })
  })

  .controller('deposit', function ($scope, $location) {
    var head = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    $scope.depositar = function (num, valor) {
      $.ajax({
        url: 'http://localhost:4000/account/' + num + '/deposit/' + valor,
        type: 'PUT',
        success: function (response) {
          console.log("Depositou");
          transactions.push({ id: num, acao: "Deposit", valor: valor });
          $location.path('mobBankClient');
          $scope.$apply();
        },
        error: function (response) {
          console.log(response);
        }
      });
    }
  })

  .controller('withdraw', function ($scope, $location) {
    $scope.remover = function (conta, valor) {
      $.ajax({
        url: 'http://localhost:4000/account/' + conta + '/withdraw/' + valor,
        type: 'PUT',
        success: function (reponse) {
          console.log("Sacado");
          transactions.push({ id: conta, acao: "Withdraw", valor: valor });
          $location.path("mobBankClient");
          $scope.$apply();
        },
        error: function (reponse) {
          console.log(reponse);
        }
      });
    }
  })

  .controller('closeAccount', function ($scope, $state, $location) {
    $scope.close = function (numDelete) {
      $.ajax({
        url: 'http://localhost:4000/account/' + numDelete,
        type: 'DELETE',
        success: function (response) {
          console.log("Deletou conta");
          $location.path('mobBankClient');
          $scope.$apply();
        },
        error: function (response) {
          console.log(response);
        }
      });
    }
  })

  .controller('showAccountTransactions', function ($scope) {
    $scope.showTransactions = function (number) {
      $scope.listaAccount = [];
      for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].id == number) {
          $scope.listaAccount.push({
            acao: transactions[i].acao,
            valor: transactions[i].valor
          })
        }
      }
      $scope.acao = "";
      $scope.valor = "";      
    }
  })

  .controller('showAllTransaction', function ($scope) {
    $scope.showAllTransaction = function () {
      $scope.listaAll = [];
      for (var i = 0; i < transactions.length; i++) {
        $scope.listaAll.push({
          id: transactions[i].id,
          acao: transactions[i].acao,
          valor: transactions[i].valor
        })
      }
      $scope.id = "";
      $scope.acao = "";
      $scope.valor = "";      
    }
  })

  .controller('showAllAccounts', function ($scope, $state, $http, $ionicPopup) {
    $scope.lista = [];
    var head = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    $scope.showAllAccount = function () {
      $.ajax({
        url: 'http://localhost:4000/account',
        type: 'GET',
        headers: head,
        dataType: 'json',
        success: function (response) {
          $scope.lista = [];
          for (var i = 0; i < response.length; i++) {
            $scope.lista.push({
              id: response[i].number,
              nome: response[i].clientName,
              valor: response[i].balance
            })
          }
          $scope.$apply();
        },
        error: function (response) {
          console.log(response);
        }
      });
    }
  })