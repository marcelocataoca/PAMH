// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var urlForClipThumb;
angular.module('starter', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'ngCordova', 'app.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // Set the statusbar to use the default style, tweak this to
        // remove the status bar on iOS or change it to use white instead of dark colors.
        StatusBar.styleDefault();
      }
    });
  })

  .controller("CameraCtrl", function ($scope, $cordovaCamera) {
    $scope.pictureUrl = 'http://placehold.it/300x300';

    $scope.takePicture = function () {
      var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.pictureUrl = "data:image/jpeg;base64," + imageData;
        console.log($scope.pictureUrl);
      }, function (err) {
        // An error occured. Show a message to the user
        console.log('camera error:' + angular.toJson(imageData));
      });
    }
  })

  .controller('VideoCtrl', function ($scope) {
        
    $scope.recordVideo = function () {
      console.log("Take video");
      navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 1 });
    }

    function captureError(e) {
      console.log("capture error: " + JSON.stringify(e));
    }

    function captureSuccess(s) {
      var tam = s[0].localURL.length;      
      console.dir(s[0]);
      var v = "<video controls='controls'>";
      v += "<source src=data:video/" + s[0].name + "' type='video/mp4'>";
      v += "</video>";
      document.querySelector("#videoArea").innerHTML = v;
    }

    navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 2 });
  })

