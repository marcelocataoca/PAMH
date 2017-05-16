// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'ngCordova', 'ngStorage'])

  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      $rootScope.test = new Date();
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

  .config(function ($windowProvider) {
    var $window = $windowProvider.$get();
  })

  .controller('one2Nine', function ($scope, $state, $location) {

    $scope.startTimer = function () {
      $scope.timerRunning = true;

      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
      // $location.path('/page');
      $state.go('page', { reload: true });
    };
  })

  .controller('jogar', function ($scope, $interval, $rootScope, $ionicPopup, $location, $localStorage) {
    startTime();
    $scope.list = [];
    var arrayPt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var arrayEng = ["one", "two", "tree", "four", "five", "six", "seven", "eight", "nine"];
    var arrayEngCopy = ["one", "two", "tree", "four", "five", "six", "seven", "eight", "nine"];
    var arrayRm = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var arrayRmCopy = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var array = [],
      temp;
    sorteiaNum(1);

    function sorteiaNum(vez) {
      var newElement;
      if (vez == 1) {
        array = arrayPt;
      } else if (vez == 2) {
        array = arrayEng;
      } else {
        array = arrayRm;
      }
      var i = array.length,
        j = 0;
      while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      $scope.list = [];
      for (var a = 0; a < array.length; a++) {
        $scope.list.push({
          valor: array[a]
        });
        $scope.valor = "";
      }
    }
    //Contador de tempo
    $scope.time = 0;
    var num = 0;
    var intervalo;
    function startTime() {
      intervalo = $interval(function () {
        num += 0.01;
        $scope.time = num.toFixed(2);
      }, 10);
    }
    $scope.ativo = { blue: true }
    $scope.selectedIndex = 1;
    $scope.numberIngles = "one";
    $scope.numberRm = "I";
    var contador = 0;

    $scope.sequencial = function (i) {
      if (i == $scope.selectedIndex) {
        var d = document.getElementById("page-button" + i);
        d.className += " ativo";
        if (i == 9) {
          for (var p = 1; p <= arrayPt.length; p++) {
            document.getElementById("page-button" + p).className = "";
            document.getElementById("page-button" + p).className = "btNum val linha ng-pristine ng-untouched ng-valid ng-binding";
          }
          trocaNum();
        }
        $scope.selectedIndex++;
      } else if (i == $scope.numberIngles) {
        var d = document.getElementById("page-button" + i);
        d.className += " ativo";
        $scope.numberIngles = arrayEngCopy[++contador];
        if (i == 'nine') {
          for (var p = 0; p <= arrayEng.length; p++) {
            if ($("#page-button" + arrayEng[p]).hasClass("ativo")) {
              $("#page-button" + arrayEng[p]).removeClass("ativo");
            }
          }
          trocaNum();
          contador = 0;
        }
      } else if (i == $scope.numberRm) {
        var d = document.getElementById("page-button" + i);
        d.className += " ativo";
        $scope.numberRm = arrayRmCopy[++contador];
        if (i == 'IX') {
          clearInterval(intervalo);
          $localStorage.time = $scope.time;
          var alertPopup = $ionicPopup.alert({
            title: "End of the game",
            template: "Your time was " + $scope.time + " seconds."
          })
          $(".popup-buttons").click(function () {                        
            $location.path('/one2Nine');
          });
        }
      }
    }
    var vezes = 2;
    function trocaNum() {
      sorteiaNum(vezes);
      vezes++;
    }
  })

  .controller('tela2', function ($scope, $location, $localStorage) {    
    $scope.user = [{ name: "", date: "" }];
    if ($scope.user.name == undefined)
      $scope.user.name = "No one played before.";
    if ($localStorage.time != undefined) {
      $scope.user.name = "Anonymous";
      $scope.user.date = new Date();      
      if ($localStorage.bestTimeStorage == undefined) {
        var tempo = $localStorage.time;
        $localStorage.bestTimeStorage = tempo.replace('.',':');
      } else {
        var tempo = $localStorage.bestTimeStorage < $localStorage.time ? $localStorage.bestTimeStorage : $localStorage.time;
        $localStorage.bestTimeStorage = tempo.replace('.',':');
      }
    }
    $scope.bestTime = $localStorage.bestTimeStorage;
    //Anonymous  08-02-2017 22:01:32
  })